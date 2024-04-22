import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrl: './question-edit.component.css'
})
export class QuestionEditComponent {
  id: number;
  editMode = false;
  questionForm: FormGroup;

  get questionControls() {
    return (this.questionForm.get('options') as FormArray).controls
  }


  constructor(private route: ActivatedRoute,
              private questionService: QuestionService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {

    if (this.editMode) {
      this.questionService.updateQuestion(this.id, this.questionForm.value);

    } else {
      this.questionService.addQuestion(this.questionForm.value);
      console.log(this.questionForm.value)
      
    }
    this.onCancel();
  }


  onAddQuestion() {
    (<FormArray>this.questionForm.get('options')).push(
      new FormGroup({
        'title': new FormControl(null, Validators.required),
        'value': new FormControl(null, [
          Validators.required,
        ])
      })
    );
  }

  onDeleteQuestion(index: number) {
    (<FormArray>this.questionForm.get('options')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let questionTitle = '';
    let questionDescription = '';
    let questionOptions = new FormArray([]);

    if (this.editMode) {
      const question = this.questionService.getQuestion(this.id);
      questionTitle = question.title;
      questionDescription = question.description;
      if (question['options']) {
        for (let option of question.options) {
          questionOptions.push(
            new FormGroup({
              'title': new FormControl(option.title, Validators.required),
              'value': new FormControl(option.value, [
                Validators.required,
              ])
            })
          );
        }
      }
    }

    this.questionForm = new FormGroup({
      'title': new FormControl(questionTitle, Validators.required),
      'description': new FormControl(questionDescription, Validators.required),
      'options': questionOptions
    });
  }

}
