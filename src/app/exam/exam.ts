import { Component, OnDestroy, OnInit, computed, input, output, signal } from '@angular/core';
import { ExamResult, Question } from '../pdf-question.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.html',
  styleUrl: './exam.scss',
})
export class ExamComponent implements OnInit, OnDestroy {
  readonly questions = input.required<Question[]>();
  readonly durationMinutes = input.required<number>();
  protected readonly completed = output<ExamResult>();
  protected readonly currentIndex = signal(0);
  protected readonly answers = signal<(number | null)[]>([]);
  protected readonly secondsRemaining = signal(0);
  protected readonly currentQuestion = computed(() => this.questions()[this.currentIndex()]);
  protected readonly formattedTime = computed(() => {
    const minutes = Math.floor(this.secondsRemaining() / 60).toString().padStart(2, '0');
    const seconds = (this.secondsRemaining() % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  });
  protected readonly answeredCount = computed(() => this.answers().filter((answer) => answer !== null).length);
  private timerId: number | null = null;
  private hasSubmitted = false;

  ngOnInit(): void {
    this.answers.set(Array(this.questions().length).fill(null));
    this.secondsRemaining.set(this.durationMinutes() * 60);
    this.timerId = window.setInterval(() => {
      if (this.secondsRemaining() <= 1) {
        this.secondsRemaining.set(0);
        this.submitExam();
        return;
      }
      this.secondsRemaining.update((seconds) => seconds - 1);
    }, 1000);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  protected selectAnswer(optionIndex: number): void {
    this.answers.update((answers) =>
      answers.map((answer, index) => (index === this.currentIndex() ? optionIndex : answer)),
    );
  }

  protected goToQuestion(index: number): void {
    if (index >= 0 && index < this.questions().length) this.currentIndex.set(index);
  }

  protected submitExam(): void {
    if (this.hasSubmitted) return;
    this.hasSubmitted = true;
    this.clearTimer();
    const questions = this.questions();
    const answers = this.answers();
    const score = questions.reduce(
      (total, question, index) =>
        total + (question.correctAnswer >= 0 && answers[index] === question.correctAnswer ? 1 : 0),
      0,
    );
    const gradedQuestionCount = questions.filter((question) => question.correctAnswer >= 0).length;
    this.completed.emit({
      questions,
      answers,
      score,
      gradedQuestionCount,
      durationSeconds: this.durationMinutes() * 60 - this.secondsRemaining(),
      submittedAt: Date.now(),
    });
  }

  private clearTimer(): void {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}