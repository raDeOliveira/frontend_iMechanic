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
  isClicked!: boolean;
  questionNumber = 0;

  // card input values
  card: Card = {
    colName: '',
    questions: []
  };

  // next question
  nextQuestion() {
    if (this.questionNumber <= 0) {
      // this.questionNumber = this.questionNumber;
    };
    this.questionNumber++;
    this.questions.forEach(element => {
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
    });
    console.log(this.questionNumber);
  };

  // previous question
  previousQuestion() {
    if (this.questionNumber >= 7) {
      // this.questionNumber = this.questionNumber;
    };
    this.questionNumber--;
    this.questions.forEach(element => {
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
    });
    console.log(this.questionNumber);
  };

  ngOnInit(): void {
    this.questions.forEach(element => {
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
    });
  };


}
