import { Component, Input, OnInit } from '@angular/core';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';
import { Card } from 'src/app/model/card';
import { ApiService } from 'src/app/service/api.service';

export class ItemService {
  items: any;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  @Input() card!: Card;
  questions = this.apiService.questions;
  questionNumber = 0;
  answersArray: Array<string> = [];

  // BUG fix array index outbound
  // next question
  nextQuestion() {
    if (this.questionNumber <= 0) {
      console.log('no more questions');
    }
    this.questionNumber++;
    this.questions.forEach(element => {
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
    });
    console.log(this.questionNumber);
  }

  // BUG fix array index outbound
  // previous question
  previousQuestion() {
    if (this.questionNumber >= 7) {
      console.log('no more questions');
    }
    this.questionNumber--;
    this.questions.forEach(element => {
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
    });
    console.log(this.questionNumber);
  }

  // NOTE create dict to store q.name, q.id and q.answer
  // getAnswer(event: any, answerTitle: string, answer: string) {
  getAnswer(event: any, answer: string) {
    if (event.checked) {
      if (!this.answersArray.includes(answer)) {
        this.answersArray.push(answer);
        console.log(this.answersArray);
      }
    } else {
      this.answersArray.splice(this.answersArray.indexOf(answer), 1);
      console.log(this.answersArray);
    }
  }

  // next button
  nextBtn: ButtonIconRound = {
    nameIcon: 'arrow_forward',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175'
  };

  // previous button
  previousBtn: ButtonIconRound = {
    nameIcon: 'arrow_back',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175'
  };

  // tooltip button
  tooltipBtn: ButtonIconRound = {
    nameIcon: 'warning',
    backgroundColor: '#F0ED1F',
    foregroundColor: '#000000',
    hover: '#F0ED1F',
    width: '50px',
    height: '30px'
  };

  checkboxes = [
    {
      color: "#17b057",
      name: "Data 1"
    },
    {
      color: "#ea5455",
      name: "Data 2"
    },
    {
      color: "#4da6e9",
      name: "Data 3"
    },
    {
      color: "#06c706",
      name: "Data 4"
    }
  ];

  ngOnInit(): void {

  }

}
