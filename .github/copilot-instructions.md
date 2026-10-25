# Copilot instructions for PdfToMock

## Project commands

Run commands from the `PdfToMock` project directory.

- `npm start` — start the Angular development server at `http://localhost:4200/`.
- `npm run build` — create the production build in `dist/PdfToMock`.
- `npm run watch` — rebuild continuously with the development configuration.
- `npm test -- --watch=false` — run the Vitest unit-test suite once.
- `npx ng test --watch=false --include src/app/app.spec.ts` — run one test file.
- `npx ng test --watch=false --filter "App"` — run tests whose suite or test name matches the regular expression.

There is no lint script or lint builder configured in `package.json` or `angular.json`. Prettier is configured in `.prettierrc`; use it for formatting when changing code. The production build currently completes successfully but reports component-style budget warnings for the exam, results, and setup SCSS files. The existing `src/app/app.spec.ts` still contains the old “Hello, PdfToMock” title assertion, so the full suite currently has one failing stale test.

## Architecture

This is a standalone Angular 22 browser application. `src/main.ts` bootstraps the standalone `App` component with `appConfig`; routing is configured but `routes` is intentionally empty, so the application is one client-side screen rather than a routed set of pages.

The root `App` component owns the application state as signals and switches between three phases:

1. `SetupComponent` loads either pasted JSON or the built-in question bank and emits `StartSettings`.
2. `ExamComponent` receives the selected questions and duration through signal inputs, manages navigation, answers, and the countdown timer, then emits an `ExamResult`.
3. `ResultsComponent` receives the result, calculates display-only summary values, renders question-by-question review, and emits a request to return to setup.

`PdfQuestionService` is the data boundary. It parses pasted JSON, validates the complete `question_sets` DTO shape, flattens set context into `Question` objects, maps answer labels (`A`–`E`) to option indexes, and treats missing answer keys as ungraded (`correctAnswer: -1`). `question-bank.ts` contains the built-in DTO data and its TypeScript interfaces. There is no backend, PDF parser, file upload, or external AI call; the setup screen only provides a prompt that users can copy into another tool and then paste the resulting JSON.

Each feature is a standalone component with a colocated TypeScript file, HTML template, and SCSS stylesheet (except the small header, which uses an inline template and styles). Global visual tokens and typography are in `src/styles.scss`; component styles use those variables and the project’s paper/study-desk visual language.

## Codebase conventions

- Use standalone components and explicit `imports` arrays; do not introduce NgModules.
- Prefer Angular signals for local mutable state and `computed` for derived state. Use signal-based `input()` and `output()` APIs for component boundaries, following the existing components.
- Keep cross-phase state in `App`; keep setup parsing, exam timing/scoring, and result presentation in their respective components.
- Preserve the DTO contract documented in `README.md` and represented by `QuestionBankSetDto`/`QuestionBankQuestionDto`: every set includes metadata, diagram data, notes, and questions; each question supplies option keys `A` through `E` (use `""` for an unused option).
- When changing question parsing, update validation and error messages together. Parsed questions must retain set context, and answer mappings must remain scoped to each question set because question numbers can repeat.
- Preserve the distinction between graded and ungraded questions. Scoring counts only questions with a supplied valid answer key; results must continue to show ungraded questions as “NOT SCORED”.
- Use Angular’s built-in template control flow (`@if`, `@else`, `@for`) and keep templates accessible: labels, headings, roles, live regions, keyboard-focus styles, and button semantics are already part of the UI pattern.
- Keep user-facing validation failures visible through the component’s `errorMessage` signal; do not silently accept malformed JSON or substitute success-shaped data.
- Follow the repository formatting conventions: two-space indentation, single-quoted TypeScript strings, final newlines, and a 100-character Prettier print width. HTML is formatted with Prettier’s Angular parser.
- Keep the built-in question bank’s DTO data and answer explanations aligned when adding or correcting questions. Do not move question data into a new service or external dependency without changing the documented input model.
