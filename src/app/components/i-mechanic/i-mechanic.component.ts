import { Component, OnInit } from '@angular/core';
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
  allYears = [];
  selectedCar: any | string;

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
    this.apiService
      .getAllBrands()
      .subscribe((brand) => (this.allBrands = brand));
  }

  // get all models by brand
  // getAllModelsByBrand() {
  //   this.apiService.getAllModelsByBrand().subscribe(
  //     model => this.allModels = model
  //   )
  // };

  // get all fuels
  getAllFuels() {
    this.apiService.getAllFuels().subscribe((fuel) => (this.allFuels = fuel));
  }

  // get all years
  getAllYears() {
    this.apiService.getAllYears().subscribe((year) => (this.allYears = year));
  }

  // get selected car
  // getSelectedCar() {
  //   this.apiService.getSelectedCar().subscribe(
  //     selectedCar => this.selectedCar = selectedCar
  //   )
  // };

  // back button
  clickMe = () => {
    this.route.navigate(['/']);
  };

  ngOnInit(): void {
    this.getAllBrands();
    // this.getAllModelsByBrand();
    this.getAllFuels();
    this.getAllYears();
    // this.getSelectedCar();
  }
}
