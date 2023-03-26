import { Component, Input, OnInit } from '@angular/core';

export interface Button {
  nameIcon: string;
  color: string;
  action: string;
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() buttons: Button | any;
  @Input() bgColor: any | '#A6D1F2';
  self: any;

  getStyles(colorValue: any): any {
    const styles = {
      color: colorValue,
    };
    return styles;
  }

  constructor() {
    this.self = this;
  }

  ngOnInit(): void {
  }

}
