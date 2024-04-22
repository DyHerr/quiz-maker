import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent {
  questions: Question[];
  subscription: Subscription;

  constructor(private questionService: QuestionService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }
 
  ngOnInit() {
    this.dataStorageService.fetchQuestions().subscribe();
    this.subscription = this.questionService.questionsChanged
      .subscribe(
        (questions: Question[]) => {
          this.questions = questions;
        }
      );
    this.questions = this.questionService.getQuestions();
  }

  onNewQuestion() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  startQuiz(){
    this.dataStorageService.storeQuestions();
    this.dataStorageService.fetchQuestions().subscribe();
    this.router.navigate(['quiz']);
  }

  onSaveData(){
    this.dataStorageService.storeQuestions();
  }

  onFetchData(){
     this.dataStorageService.fetchQuestions().subscribe();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
