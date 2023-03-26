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

  // set button styles
  setStyles(): any {
    const styles = {
      'background-color': this.data.backgroundColor,
      'color': this.data.foregroundColor,
      'margin': '5px',
      width: (this.data.size ? this.data.size : '') + 'px',
      height: (this.data.size ? this.data.size : '') + 'px'
    };
    return styles;
  };

  // set mat-icon style
  setIconStyles(): any {
    const styles = {
      'left': '5px'
    }
    return styles;
  };

  ngOnInit(): void {
  }

}
