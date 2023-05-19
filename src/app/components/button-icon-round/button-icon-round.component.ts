import { Component, Input, OnInit } from '@angular/core';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';

@Component({
  selector: 'app-button-icon-round',
  templateUrl: './button-icon-round.component.html',
  styleUrls: ['./button-icon-round.component.scss']
})
export class ButtonIconRoundComponent implements OnInit {

  @Input() data!: ButtonIconRound;
  hover: boolean = false;

  constructor() { }


  mouseIn() {
    this.hover = true;
  }

  mouseOut() {
    this.hover = false;
  }

  // set button styles
  setStyles(): any {

    if (this.hover) {
      const styles = {
        'background-color': this.data.hover,
        'color': this.data.foregroundColor,
        'width': this.data.width,
        'height': this.data.height,
        'transform': this.data.transform,
        'font-size': this.data.size
      };
      return styles;
    } else {
      const styles = {
        'background-color': this.data.backgroundColor,
        'color': this.data.foregroundColor,
        'width': this.data.width,
        'height': this.data.height,
        'font-size': this.data.size
      };
      return styles;
    }
  }

  // set mat-icon style
  setIconStyles(): any {
    const styles = {
      'left': '5px'
    }
    return styles;
  }

  ngOnInit(): void {
  }

}
