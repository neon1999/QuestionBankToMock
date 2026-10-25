import { Component, computed, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ExamResult } from '../pdf-question.service';

@Component({
  selector: 'app-results',
  imports: [DatePipe],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class ResultsComponent {
  readonly result = input.required<ExamResult>();
  protected readonly createAnother = output<void>();
  protected readonly percentage = computed(() =>
    this.result().gradedQuestionCount === 0
      ? null
      : Math.round((this.result().score / this.result().gradedQuestionCount) * 100),
  );
  protected readonly timeTaken = computed(() => {
    const seconds = this.result().durationSeconds;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
  });
  protected readonly unansweredCount = computed(
    () => this.result().questions.length - this.result().answers.filter((answer) => answer !== null).length,
  );
}