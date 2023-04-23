import { Component, Input } from '@angular/core';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';
import { Card } from 'src/app/model/card';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private apiService: ApiService) { }

  @Input() card!: Card;
  questions = this.apiService.questions;
  isClicked!: boolean;
  questionNumber = 0;


  // BUG fix array index outbound
  // next question
  nextQuestion() {
    if (this.questionNumber <= 0) {
    };
    this.questionNumber++;
    this.questions.forEach(element => {
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
    });
    console.log(this.questionNumber);
  };

  // BUG fix array index outbound
  // previous question
  previousQuestion() {
    if (this.questionNumber >= 7) {
    };
    this.questionNumber--;
    this.questions.forEach(element => {
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
    });
    console.log(this.questionNumber);
  };

  // next button
  nextBtn: ButtonIconRound = {
    nameIcon: 'arrow_forward',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175',
    output: this.nextQuestion
  };

  // previous button
  previousBtn: ButtonIconRound = {
    nameIcon: 'arrow_back',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175',
    output: this.previousQuestion
  };

}
