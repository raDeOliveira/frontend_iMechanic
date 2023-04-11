import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-i-mechanic',
  templateUrl: './i-mechanic.component.html',
  styleUrls: ['./i-mechanic.component.scss'],
})
export class IMechanicComponent implements OnInit {

  allBrands = [];
  allModels = [];
  allFuels = [];
  allOptions = [];

  selectedFuel: any;
  selectedBrand: any;
  selectedModel: any;
  selectedOption: any;
  selectedCar: any;

  constructor(private route: Router, private apiService: ApiService) { }

  // redirect to iReport
  redirectToiReport(): any {
    this.route.navigate(['/iReport']);
    console.log('redirect to iReport')
  }

  questionsBtn: ButtonIconRound = {
    nameIcon: 'start',
    backgroundColor: '#8ac53f',
    foregroundColor: '#ffffff',
    data: '',
    size: 50,
    output: this.redirectToiReport
  };

  // get all brands
  getAllBrands() {
    this.apiService.getAllBrands().subscribe((brand) => (this.allBrands = brand));
  };

  // get all models by brand
  getAllModelsByBrand(brand: string) {
    this.apiService.getAllModelsByBrand(brand).subscribe(
      model => this.allModels = model
    );
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

  // back button
  clickMe = () => {
    this.route.navigate(['/']);
  };

  // getFuelValue(value: any) {
  //   this.selectedFuel = value;
  // }
  // getModelValue(value: any) {
  //   this.selectedModel = value;
  // }

  // get values from dropdowns
  onSelectionChange(opened: boolean) {
    if (!opened && this.selectedFuel && this.selectedModel && this.selectedBrand) {
      this.getOptionCar(this.selectedBrand, this.selectedModel, this.selectedFuel);
    };

    if (!opened && this.selectedFuel && this.selectedModel && this.selectedBrand && this.selectedOption) {
      this.getSelectedCar(this.selectedBrand, this.selectedModel, this.selectedFuel, this.selectedOption);
      console.log(this.selectedCar);
    };
  };

  onChangeSelectedCar(opened: boolean) {

  };

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllFuels();

  };

};

