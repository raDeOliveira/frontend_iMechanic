import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss']
})
export class SelectCarComponent {

  // table columns
  displayedColumns = [
    'engine_Cylinders',
    'engine_Displacement',
    'engine_Fuel',
    'engine_Fuel_System',
    'engine_Power',
    'engine_Torque',
    'fuel_Economy_Combined',
    'performance_Top_Speed',
    'transmission_Drive_Type',
    'transmission_Gearbox'
  ];

  imgTrue: boolean = false;
  showTable: boolean = false;


}
