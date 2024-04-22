import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question } from '../question/question.model';
import { QuestionService } from '../question/question.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions: Question[];
  private subscription: Subscription;
  currentQuestion = 0;
  quizEnded = false;
  errors = 0;

  constructor( private questionService: QuestionService, 
               private router: Router,
               private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.fetchQuestions();
    this.questions = this.questionService.getQuestions();
  }


  restartQuiz(){
      this.router.navigate(['quiz']);
  }

  answer(answerValue: any){
    if(answerValue === 'true') {
      console.log('OK!')

    } else {
      this.errors++
    }
    if( (this.currentQuestion + 1 ) === this.questions.length ){
      this.quizEnded = true;
      // this.router.navigate(['question']);
    } else {
      this.currentQuestion++
      console.log('3')
  }
      
  }
  
}

