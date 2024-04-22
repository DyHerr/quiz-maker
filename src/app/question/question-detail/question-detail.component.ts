import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.css'
})
export class QuestionDetailComponent {
  question: Question;
  id: number;

  constructor(private questionSerivce: QuestionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.question = this.questionSerivce.getQuestion(this.id);
        }
      );
  }


  onEditQuestion() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteQuestion() {
    this.questionSerivce.deleteQuestion(this.id);
    this.router.navigate(['/question']);
  }

}
