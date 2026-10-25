import { Component, signal } from '@angular/core';
import { AppHeader } from './app-header/app-header';
import { ExamResult, Question } from './pdf-question.service';
import { ExamComponent } from './exam/exam';
import { ResultsComponent } from './results/results';
import { SetupComponent, StartSettings } from './setup/setup';

@Component({
  selector: 'app-root',
  imports: [AppHeader, SetupComponent, ExamComponent, ResultsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly phase = signal<'setup' | 'exam' | 'results'>('setup');
  protected readonly examQuestions = signal<Question[]>([]);
  protected readonly durationMinutes = signal(30);
  protected readonly result = signal<ExamResult | null>(null);

  protected startMock(settings: StartSettings): void {
    this.examQuestions.set(settings.questions.slice(0, settings.questionCount));
    this.durationMinutes.set(settings.durationMinutes);
    this.phase.set('exam');
  }

  protected finishMock(result: ExamResult): void {
    this.result.set(result);
    this.phase.set('results');
  }

  protected createAnotherMock(): void {
    this.result.set(null);
    this.examQuestions.set([]);
    this.phase.set('setup');
  }
}