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
