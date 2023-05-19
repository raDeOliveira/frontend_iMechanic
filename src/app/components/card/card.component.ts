import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';
import { Card } from 'src/app/model/card';
import { ApiService } from 'src/app/service/api.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalData } from 'src/app/model/modal-data';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any> | any;
  @Input() card!: Card;

  answersArray: Array<string> = [];
  modalData!: ModalData;
  questions = this.apiService.questions;
  questionNumber = 0;

  imgArr = [
    'https://live.staticflickr.com/65535/52874929115_5cecca8cb1_z.jpg',
    'https://live.staticflickr.com/65535/52906749786_4be1db8d0b_z.jpg',
    'https://live.staticflickr.com/65535/52907131295_e52b189afc_z.jpg',
    'https://live.staticflickr.com/65535/52907200528_59200b1dc8_z.jpg'
  ]

  constructor(private apiService: ApiService, private modalService: MdbModalService) { }

  // BUG fix array index outbound
  // next question
  nextQuestion() {
    if (this.questionNumber <= 0) {
      console.log('no more questions');
    }
    this.questionNumber++;
    this.questions.forEach(() => {
      this.card.id = this.questions[this.questionNumber].id;
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
      this.card.question_name = this.questions[this.questionNumber].question_name;
      this.card.question_type_name = this.questions[this.questionNumber].question_type_name;
      this.card.srcImg = this.imgArr[this.questionNumber];
    });
  }

  // BUG fix array index outbound
  // previous question
  previousQuestion() {
    if (this.questionNumber >= 7) {
      console.log('no more questions');
    }
    this.questionNumber--;
    this.questions.forEach(() => {
      this.card.id = this.questions[this.questionNumber].id;
      this.card.colName = this.questions[this.questionNumber].question_name;
      this.card.questions = this.questions[this.questionNumber].question_item;
      this.card.question_name = this.questions[this.questionNumber].question_name;
      this.card.question_type_name = this.questions[this.questionNumber].question_type_name;
    });
  }

  // get answers from user
  // NOTE store answers in array CARD
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

  // open modal
  openModal(srcImg: string, notes: string) {
    this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered',
      data: {
        title: this.card.question_name,
        srcImg: srcImg,
        notes: notes
      }
    });
  }


  ngOnInit(): void {
  }


}
