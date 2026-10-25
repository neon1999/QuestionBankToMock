import { Injectable } from '@angular/core';
import { AnswerDetailsDto, AnswerOption, questionBank } from './question-bank';

export interface Question {
  text: string;
  options: string[];
  correctAnswer: number;
  context?: string;
  explanation?: string;
  answerDetails?: AnswerDetailsDto;
}

export interface ExamResult {
  questions: Question[];
  answers: (number | null)[];
  score: number;
  gradedQuestionCount: number;
  durationSeconds: number;
  submittedAt: number;
}

@Injectable({ providedIn: 'root' })
export class PdfQuestionService {
  loadHardcodedQuestions(): Question[] {
    return this.validateQuestions({ question_sets: questionBank });
  }

  parseQuestions(text: string): Question[] {
    let value: unknown;
    try {
      value = JSON.parse(text);
    } catch {
      throw new Error('Paste valid JSON in the required question format.');
    }

    const questionBankValue = Array.isArray(value) ? { question_sets: value } : value;
    return this.validateQuestions(questionBankValue);
  }

  private validateQuestions(value: unknown): Question[] {
    if (!value || typeof value !== 'object' || !('question_sets' in value)) {
      throw new Error('Gemini returned question data in an unexpected format.');
    }
    if (!Array.isArray(value.question_sets)) {
      throw new Error('Gemini returned question data in an unexpected format.');
    }

    const extractedQuestions: Question[] = [];
    const optionLabels = ['A', 'B', 'C', 'D', 'E'] as const;

    value.question_sets.forEach((set: unknown, setIndex: number) => {
      if (
        !set ||
        typeof set !== 'object' ||
        !('set_id' in set) || typeof set.set_id !== 'string' ||
        !('category' in set) || typeof set.category !== 'string' ||
        !('directions' in set) || typeof set.directions !== 'string' ||
        !('has_diagram' in set) || typeof set.has_diagram !== 'boolean' ||
        !('diagram_type' in set) || (set.diagram_type !== null && typeof set.diagram_type !== 'string') ||
        !('extracted_diagram_data' in set) || !set.extracted_diagram_data || typeof set.extracted_diagram_data !== 'object' ||
        !('headers' in set.extracted_diagram_data) || !Array.isArray(set.extracted_diagram_data.headers) ||
        !set.extracted_diagram_data.headers.every((header: unknown) => typeof header === 'string') ||
        !('rows' in set.extracted_diagram_data) || !Array.isArray(set.extracted_diagram_data.rows) ||
        !set.extracted_diagram_data.rows.every((row: unknown) => Array.isArray(row) && row.every((cell: unknown) => typeof cell === 'string')) ||
        !('notes' in set) || !Array.isArray(set.notes) || !set.notes.every((note: unknown) => typeof note === 'string') ||
        !('questions' in set) || !Array.isArray(set.questions)
      ) {
        throw new Error(`Question set ${setIndex + 1} was not returned in the required format.`);
      }

      const headers = set.extracted_diagram_data.headers as string[];
      const rows = set.extracted_diagram_data.rows as string[][];
      const notes = set.notes as string[];
      const context = [
        set.category,
        set.directions,
        ...(notes.length ? [`Notes:\n${notes.map((note, index) => `${index + 1}. ${note}`).join('\n')}`] : []),
        ...(set.has_diagram && set.diagram_type ? [`${set.diagram_type} data:\n${[headers.join(' | '), ...rows.map((row) => row.join(' | '))].filter(Boolean).join('\n')}`] : []),
      ].filter(Boolean).join('\n\n');

      set.questions.forEach((question: unknown, questionIndex: number) => {
        if (!question || typeof question !== 'object') {
          throw new Error(`Question ${questionIndex + 1} in set ${setIndex + 1} was not returned in the required format.`);
        }
        const questionRecord = question as Record<string, unknown>;
        const rawOptions = questionRecord['options'];
        if (
          typeof questionRecord['question_number'] !== 'string' ||
          typeof questionRecord['question_text'] !== 'string' ||
          !questionRecord['question_text'].trim() ||
          !rawOptions ||
          typeof rawOptions !== 'object' ||
          Array.isArray(rawOptions) ||
          !optionLabels.every((label) => typeof (rawOptions as Record<string, unknown>)[label] === 'string')
        ) {
          throw new Error(`Question ${questionIndex + 1} in set ${setIndex + 1} was not returned in the required format.`);
        }

        const questionNumber = questionRecord['question_number'] as string;
        const questionText = questionRecord['question_text'] as string;
        const optionValues = rawOptions as Record<(typeof optionLabels)[number], string>;
        const availableOptions = optionLabels
          .map((label) => ({ label, text: optionValues[label].trim() }))
          .filter((option) => option.text.length > 0);
        const options = availableOptions.map((option) => option.text);
        if (options.length < 2) {
          throw new Error(`Question ${questionNumber} has fewer than two answer options.`);
        }
        const answerDetails = questionRecord['answerDetails'] as AnswerDetailsDto | undefined;
        const answerOption = answerDetails?.answer as AnswerOption | undefined;
        const correctAnswer = answerOption
          ? availableOptions.findIndex((option) => option.label === answerOption)
          : -1;

        extractedQuestions.push({
          text: `${questionNumber}. ${questionText.trim()}`,
          options,
          correctAnswer,
          context,
          explanation: answerDetails?.solution ?? undefined,
          answerDetails,
        });
      });
    });

    return extractedQuestions;
  }
}