import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Options } from '../shared/options.model';
import { Question } from './question.model';

@Injectable()
export class QuestionService {
  questionsChanged = new Subject<Question[]>();

  private questions: Question[] = [
    new Question(
      'Which of the following does TypeScript use to specify types?',
      'select you answer',
      [
        new Options(':', 'true'),
        new Options(';', 'false'),
        new Options('!', 'false'),
        new Options('&', 'false'),
      ]),
      new Question(
        'Which of the following is NOT a type used in TypeScript?',
        'select you answer',
        [
          new Options('number', 'false'),
          new Options('boolean', 'false'),
          new Options('string', 'false'),
          new Options('enum', 'true')
        ]),
      new Question(
        'How can we specify properties and methods for an object in TypeScript?',
        'select you answer',
        [
          new Options('Use classes', 'false'),
          new Options('Use interfaces', 'true'),
          new Options('Use async/await', 'false'),
          new Options('Use enums', 'false')
        ]),
      new Question(
        'How else can Array<number> be written in TypeScript?',
        'select you answer',
        [
          new Options('@number', 'false'),
          new Options('number[]', 'true'),
          new Options('number!', 'false'),
          new Options('number?', 'false')
        ]),
  ];
  

  constructor() {}

  getQuestions() {
    return this.questions.slice();
  }

  getQuestion(index: number) {
    return this.questions[index];
  } 


  addQuestion(question: Question) {
    this.questions.push(question);
    this.questionsChanged.next(this.questions.slice());
  }

  updateQuestion(index: number, newQuestion: Question) {
    this.questions[index] = newQuestion;
    this.questionsChanged.next(this.questions.slice());
  }

  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
    this.questionsChanged.next(this.questions.slice());
  }

  setQuestions(questions: Question[]) {
    this.questions = questions;
    this.questionsChanged.next(this.questions.slice());
  }

}
