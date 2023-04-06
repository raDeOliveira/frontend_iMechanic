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

  // next button
  nextBtn: ButtonIconRound = {
    nameIcon: 'arrow_forward',
    backgroundColor: '#8ac53f',
    foregroundColor: '#ffffff',
    data: '',
    size: 25,
    output: this.nextQuestion
  };

  // previous button
  previousBtn: ButtonIconRound = {
    nameIcon: 'arrow_back',
    backgroundColor: '#8ac53f',
    foregroundColor: '#ffffff',
    data: '',
    size: 25,
    output: this.previousQuestion
  };

}
