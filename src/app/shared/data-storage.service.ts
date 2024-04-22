import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { QuestionService } from "../question/question.service";
import { Question } from "../question/question.model";

@Injectable()
export class DataStorageService {
    
    constructor(private http: HttpClient,
                private questionService: QuestionService){}

    storeQuestions(){
        const questions = this.questionService.getQuestions();
        this.http.put('https://quiz-maker-149fd-default-rtdb.europe-west1.firebasedatabase.app/questions.json', 
        questions).subscribe(response => {
            console.log(response);
        });
    }

    fetchQuestions(){
                console.log('Loaded')
                return this.http.get<Question[]>(
                    'https://quiz-maker-149fd-default-rtdb.europe-west1.firebasedatabase.app/questions.json'
                ).pipe(
                map(questions => {
                    return questions.map(question => {
                        return {...question, ingredients: question.options ? question.options : []
                        };
                    });
                }),
                tap(questions => {
                     this.questionService.setQuestions(questions);
                })
            );
        }
}