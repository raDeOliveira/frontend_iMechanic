import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import * as questionsJSON from "../../../assets/questions.json"

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

  ngOnInit(): void {

  }



}
