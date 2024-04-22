import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { QuestionEditComponent } from './question/question-edit/question-edit.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  { path: 'question', component: QuestionComponent, children: [
    { path: 'new', component: QuestionEditComponent },
    { path: ':id', component: QuestionDetailComponent },
    { path: ':id/edit', component: QuestionEditComponent }
  ] },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
