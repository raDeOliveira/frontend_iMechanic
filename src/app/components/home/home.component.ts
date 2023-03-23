import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allBrands = [];
  allModels = [];
  allFuels = [];
  allYears = [];
  selectedCar: any | string;

  constructor(private apiService: ApiService, private jwtHelper: JwtHelperService) { }

  // get all brands
  getAllBrands() {
    this.apiService.getAllBrands().subscribe(
      brand => this.allBrands = brand
    )
  };

  // get all models by brand
  // getAllModelsByBrand() {
  //   this.apiService.getAllModelsByBrand().subscribe(
  //     model => this.allModels = model
  //   )
  // };

  // get all fuels
  getAllFuels() {
    this.apiService.getAllFuels().subscribe(
      fuel => this.allFuels = fuel
    )
  };

  // get all years
  getAllYears() {
    this.apiService.getAllYears().subscribe(
      year => this.allYears = year
    )
  };

  // get selected car
  // getSelectedCar() {
  //   this.apiService.getSelectedCar().subscribe(
  //     selectedCar => this.selectedCar = selectedCar
  //   )
  // };

  // check if user is authenticated
  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  // logout
  logOut = () => {
    localStorage.removeItem("jwt");
  }

  ngOnInit(): void {
    this.getAllBrands();
    // this.getAllModelsByBrand();
    this.getAllFuels();
    this.getAllYears();
    // this.getSelectedCar();
  }


}
