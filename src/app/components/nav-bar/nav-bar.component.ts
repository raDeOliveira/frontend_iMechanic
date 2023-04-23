import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userInSession = '';

  constructor(private route: Router, private apiService: ApiService, private jwtHelper: JwtHelperService) {
    this.apiService.userInSession.subscribe(user =>
      this.userInSession = user
    );
  }

  // check if user is authenticated
  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  };

  // logout
  logOut = () => {
    localStorage.removeItem('jwt');
    this.route.navigate(['/']);
  };

  // login button
  loginBtn: ButtonIconRound = {
    nameIcon: 'login',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175',
    output: this.redirectToLogin
  };

  // back button
  backBtn: ButtonIconRound = {
    nameIcon: 'home',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    hover: '#a8d175',
  };

  // logout button
  logoutBtn: ButtonIconRound = {
    nameIcon: 'logout',
    backgroundColor: '#b23b3b',
    foregroundColor: '#ffffff'
  };

  // redirect to login page
  redirectToLogin(): any {
    this.route.navigate(['/iMechanic']);
  }

  // redirect to home page
  redirectToHome(): any {
    this.route.navigate(['/home']);
  };

  ngOnInit(): void {
  }
}
