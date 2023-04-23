import { Component, Input, OnInit } from '@angular/core';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';

@Component({
  selector: 'app-button-icon-round',
  templateUrl: './button-icon-round.component.html',
  styleUrls: ['./button-icon-round.component.scss']
})
export class ButtonIconRoundComponent implements OnInit {

  hover: boolean = false;

  constructor() { }

  @Input() data!: ButtonIconRound;

  mouseIn() {
    this.hover = true;
  };

  mouseOut() {
    this.hover = false;
  };

  // set button styles
  setStyles(): any {

    if (this.hover) {
      const styles = {
        'background-color': this.data.hover,
        'color': '#ffffff',
      };
      return styles;
    } else {
      const styles = {
        'background-color': this.data.backgroundColor,
        'color': '#ffffff',
      };
      return styles;
    }
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
