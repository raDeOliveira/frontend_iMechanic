import { Component, OnInit } from '@angular/core';
import * as questionsJSON from "../../../assets/questions.json"
import { Card } from 'src/app/model/card';
import { ApiService } from 'src/app/service/api.service';

// call questions JSON
const quest = questionsJSON;


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  // card input values
  card: Card = {
    colName: '',
    questions: []
  };

  ngOnInit(): void {
    this.card.colName = this.apiService.questions[0].question_name;
    this.card.questions = this.apiService.questions[0].question_item;
  }


}
