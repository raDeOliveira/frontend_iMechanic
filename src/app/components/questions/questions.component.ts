import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  // card input values
  // card: Card = {
  //   colName: '' as any,
  //   questions: []
  // };
  card: Card = {
    id: [],
    colName: '' as any,
    questions: [],
    question_type_name: []
  };

  ngOnInit(): void {
    this.card.id = this.apiService.questions[0].id;
    this.card.colName = this.apiService.questions[0].question_name;
    this.card.questions = this.apiService.questions[0].question_item;
    this.card.question_name = this.apiService.questions[0].question_name;
    this.card.question_type_name = this.apiService.questions[0].question_type_name;
  }


}
