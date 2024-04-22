import { Component, Input } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.css'
})
export class QuestionItemComponent {
  @Input() question: Question;
  @Input() index: number;

  ngOnInit() { 
  }
}
