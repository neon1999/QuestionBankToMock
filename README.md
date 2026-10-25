# QuestionBankToMock

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.8.

## Development server

Paste question data as JSON in the setup screen, or choose **Use built-in question bank** to start with the hardcoded questions from `src/app/question-bank.ts`. The expected pasted shape is `{ "question_sets": [...] }`, using `QuestionBankSetDto` and `QuestionBankQuestionDto` declared at the top of that file. Each question should include options `A` through `E` (use an empty string for an unused option) and can include `answerDetails: { "answer": "A", "solution": "..." }` for scoring and result review. No file upload or external AI service is used.

Question-bank entries follow `QuestionBankSetDto` and `QuestionBankQuestionDto`, declared at the top of `question-bank.ts`. Add `answerDetails: { answer: 'A', solution: '...' }` to a question to include it in scoring and the result review. Answer mappings are scoped by `set_id`, since question numbers repeat across sections.

```bash
npm start
```

Open `http://localhost:4200/`.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
