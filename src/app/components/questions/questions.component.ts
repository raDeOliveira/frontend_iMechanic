import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import * as questionsJSON from "../../../assets/questions.json"
import { Card } from 'src/app/model/card';

// call questions JSON
const quest = questionsJSON;


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  stringifiedQuestions = JSON.stringify(quest.questions);
  questions: Question[] = JSON.parse(this.stringifiedQuestions);

  card: Card = {
    colName: "",
    colValue: "",
    valuesArr: []
  }

  ngOnInit(): void {

    this.questions.forEach(element => {
      this.card.colName = element.question_name;
      this.card.colValue = element.question_type_name;
      this.card.valuesArr = element.question_item;
    });

  }



}
