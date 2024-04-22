import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionEditComponent } from './question/question-edit/question-edit.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionItemComponent } from './question/question-list/question-item/question-item.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { QuestionService } from './question/question.service';
import { DataStorageService } from './shared/data-storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    QuestionListComponent,
    QuestionEditComponent,
    QuestionDetailComponent,
    QuestionItemComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [QuestionService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
