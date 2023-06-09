import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})

// NOTE!! get BIKES database and change the logic
// NOTE!! get BIKES database and change the logic
// NOTE!! get BIKES database and change the logic
// NOTE!! get BIKES database and change the logic
// NOTE!! get BIKES database and change the logic

export class BikeComponent implements OnInit {

  allBrands = [];
  allModels = [];
  allFuels = [];
  allOptions = [];

  selectedFuel: any;
  selectedBrand: any;
  selectedModel: any;
  selectedOption: any;
  selectedCar: any[] = [];

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

  showSpinner!: boolean;
  showCarSpecs: boolean = false;
  showSelectCar: boolean = true;
  showChangeSelectedRide: boolean = false;

  constructor(private route: Router, private apiService: ApiService) { }

  // redirect to iReport
  redirectToiReport(): any {
    this.route.navigate(['/iReport']);
  }

  // redirect to iReport
  changeSelectedRide(): any {
    this.route.navigate(['/home']);
  }

  // button
  changeCar: ButtonIconRound = {
    nameIcon: 'restart_alt',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175',
  };

  // button
  iReport: ButtonIconRound = {
    nameIcon: 'quiz',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175',
    output: this.redirectToiReport
  };

  // button
  changeRide: ButtonIconRound = {
    nameIcon: 'restart_alt',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175'
  };

  // get all brands
  getAllBrands() {
    this.apiService.getAllBrands().subscribe((brand) => (this.allBrands = brand));
  };

  // get all models by brand
  getAllModelsByBrand(brand: string) {
    this.apiService.getAllModelsByBrand(brand).subscribe(model => this.allModels = model);
  };

  // get all fuels
  getAllFuels() {
    this.apiService.getAllFuels().subscribe((fuel) => (this.allFuels = fuel));
  }

  // get option car
  getOptionCar(brand: string, model: string, fuel: string) {
    this.apiService.getOptionCar(brand, model, fuel).subscribe(
      optionCar => this.allOptions = optionCar
    );
  };

  // get selected car
  getSelectedCar(brand: string, model: string, fuel: string, option: string) {
    this.apiService.getSelectedCar(brand, model, fuel, option).subscribe(
      selectedCar => this.selectedCar = selectedCar
    );
  };

  // get values from dropdowns
  onSelectionChange(opened: boolean) {
    if (!opened && this.selectedFuel && this.selectedModel && this.selectedBrand) {
      this.getOptionCar(this.selectedBrand, this.selectedModel, this.selectedFuel);
    };

    if (!opened && this.selectedFuel && this.selectedModel && this.selectedBrand && this.selectedOption) {
      this.getSelectedCar(this.selectedBrand, this.selectedModel, this.selectedFuel, this.selectedOption);

      // switch flags
      this.showCarSpecs = true;
      this.showSelectCar = false;
      this.showChangeSelectedRide = true;
    };
  };

  // back button
  goBack = () => {
    this.showCarSpecs = false;
    this.showSpinner = true;
    setTimeout(() => this.showSpinner = false, 1000);
    setTimeout(() => window.location.reload(), 500);
  };

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllFuels();
  };

}
