import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private jwtHelper: JwtHelperService) { }

  // // check if user is authenticated
  // isUserAuthenticated = (): boolean => {
  //   const token = localStorage.getItem('jwt');
  //   if (token && !this.jwtHelper.isTokenExpired(token)) {
  //     return true;
  //   }
  //   return false;
  // };

  // // logout
  // logOut = () => {
  //   localStorage.removeItem('jwt');
  // };

  ngOnInit(): void {

  }
}
