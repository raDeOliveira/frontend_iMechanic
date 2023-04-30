import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  showSelectedRide: boolean = false;

  constructor(private route: Router) { }

  // NOTE!! add maintenance option to app
  // NOTE!! add maintenance option to app

  // NOTE!! option to push historic of all searched cars from user
  // NOTE!! option to push historic of all searched cars from user

  // check if user is authenticated
  isUserAuthenticated(): boolean {
    return localStorage.getItem('jwt') ? true : false;
  };

  // bike selected
  bikeSelected() {
    this.route.navigate(['/bike']);
  };

  // car selected
  carSelected() {
    this.route.navigate(['/car']);
  };

  ngOnInit(): void {
  }
}
