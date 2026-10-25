import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfQuestionService, Question } from '../pdf-question.service';

export interface StartSettings {
  questions: Question[];
  questionCount: number;
  durationMinutes: number;
}

@Component({
  selector: 'app-setup',
  imports: [FormsModule],
  templateUrl: './setup.html',
  styleUrl: './setup.scss',
})
export class SetupComponent {
  private readonly questionService = inject(PdfQuestionService);
  protected readonly startMockRequested = output<StartSettings>();
  protected readonly pastedQuestions = signal('');
  protected readonly questions = signal<Question[]>([]);
  protected readonly questionSource = signal('');
  protected readonly questionCount = signal(10);
  protected readonly durationMinutes = signal(30);
  protected readonly errorMessage = signal('');
  protected readonly promptCopied = signal(false);
  protected readonly aiPrompt = `Convert the attached document into the exact JSON format below.

Read every question, answer option, correct answer, and solution from the document. Do not invent or change information. Return only valid JSON: no Markdown code fences, no explanation, and no extra text.

Required format:
{
  "question_sets": [
    {
      "set_id": "Set 1",
      "category": "General",
      "directions": "",
      "has_diagram": false,
      "diagram_type": null,
      "extracted_diagram_data": { "headers": [], "rows": [] },
      "notes": [],
      "questions": [
        {
          "question_number": "Q.1",
          "question_text": "Question text",
          "options": { "A": "Option A", "B": "Option B", "C": "Option C", "D": "Option D", "E": "" },
          "answerDetails": { "answer": "A", "solution": "Explanation of the correct answer" }
        }
      ]
    }
  ]
}

Example from a Data Interpretation question:
{
  "set_id": "DI Set 1: Q.1 - Q.5",
  "category": "Data Interpretation",
  "directions": "Read the given data carefully and answer the questions.",
  "has_diagram": true,
  "diagram_type": "Pie Chart & Table",
  "extracted_diagram_data": {
    "headers": ["School", "% Distribution of Total Students", "Boys : Girls Ratio"],
    "rows": [
      ["School P", "20%", "5:3"],
      ["School S", "25%", "3:2"]
    ]
  },
  "notes": ["The total number of students in all schools is 2000."],
  "questions": [
    {
      "question_number": "Q.1",
      "question_text": "Find the total number of boys in school S.",
      "options": { "A": "300", "B": "310", "C": "320", "D": "290", "E": "280" },
      "answerDetails": { "answer": "A", "solution": "School S has 25% of 2000 = 500 students. With a 3:2 boys-to-girls ratio, boys are 3/5 of 500 = 300." }
    }
  ]
}

Diagram instructions:
- If the document contains a pie chart, bar chart, line chart, table, or other visual data, set has_diagram to true and name it in diagram_type.
- Carefully read every visible label, legend, category, axis, percentage, number, unit, and ratio. Do not estimate or invent values.
- Convert the visual into extracted_diagram_data using headers and rows. Preserve the original order and units, such as %, liters, students, or rupees.
- Put chart directions, assumptions, and relationships that cannot fit in the table into directions or notes. Use the extracted diagram data as context for every related question.
- If there is no visual data, set has_diagram to false, diagram_type to null, and leave headers, rows, and notes empty.

Use an empty string for option E when a question has only four options. The answer must be one of A, B, C, D, or E. After generating the JSON, copy the complete JSON response into the mock test app.`;

  protected loadQuestions(): void {
    this.errorMessage.set('');
    this.questions.set([]);
    if (!this.pastedQuestions().trim()) {
      this.errorMessage.set('Paste your questions in the required JSON format to continue.');
      return;
    }

    try {
      const questions = this.questionService.parseQuestions(this.pastedQuestions());
      if (questions.length === 0) {
        throw new Error('Add at least one question before loading your mock.');
      }
      this.questions.set(questions);
      this.questionSource.set('Pasted question bank');
      this.questionCount.set(Math.min(this.questionCount(), questions.length));
    } catch (error) {
      this.errorMessage.set(error instanceof Error ? error.message : 'The pasted questions could not be loaded.');
    }
  }

  protected loadHardcodedQuestions(): void {
    this.errorMessage.set('');
    try {
      const questions = this.questionService.loadHardcodedQuestions();
      this.questions.set(questions);
      this.questionSource.set('Built-in question bank');
      this.questionCount.set(Math.min(this.questionCount(), questions.length));
    } catch (error) {
      this.errorMessage.set(error instanceof Error ? error.message : 'The built-in question bank could not be loaded.');
    }
  }

  protected updateQuestionCount(value: string | number): void {
    this.questionCount.set(this.toPositiveInteger(value));
  }

  protected updateDurationMinutes(value: string | number): void {
    this.durationMinutes.set(this.toPositiveInteger(value));
  }

  protected preventNonIntegerInput(event: KeyboardEvent): void {
    if (['.', ',', 'e', 'E', '+', '-'].includes(event.key)) {
      event.preventDefault();
    }
  }

  protected async copyAiPrompt(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.aiPrompt);
      this.promptCopied.set(true);
      window.setTimeout(() => this.promptCopied.set(false), 2000);
    } catch {
      this.errorMessage.set('The prompt could not be copied. Select the prompt text and copy it manually.');
    }
  }

  protected startMock(): void {
    const questions = this.questions();
    const questionCount = Math.max(1, Math.min(questions.length, Math.floor(this.questionCount())));
    const durationMinutes = Math.max(1, Math.min(240, Math.floor(this.durationMinutes())));
    if (questions.length === 0) return;
    const orderedQuestions = [
      ...questions.filter((question) => question.correctAnswer >= 0),
      ...questions.filter((question) => question.correctAnswer < 0),
    ];
    this.startMockRequested.emit({ questions: orderedQuestions, questionCount, durationMinutes });
  }

  private toPositiveInteger(value: string | number): number {
    const parsed = typeof value === 'number' ? value : Number(value);
    return Number.isFinite(parsed) ? Math.max(1, Math.floor(parsed)) : 1;
  }
}