import { Component, Input, OnInit } from '@angular/core';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';

@Component({
  selector: 'app-button-icon-round',
  templateUrl: './button-icon-round.component.html',
  styleUrls: ['./button-icon-round.component.scss']
})
export class ButtonIconRoundComponent implements OnInit {

  constructor() { }

  @Input() data!: ButtonIconRound;

  // set button background color
  setStyles(): any {
    const styles = {
      'background-color': this.data.backgroundColor,
      width: (this.data.size ? this.data.size : '') + 'px',
      height: (this.data.size ? this.data.size : '') + 'px'
    };
    return styles;
  }

  ngOnInit(): void {
  }

}
