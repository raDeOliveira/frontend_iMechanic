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

  // @Input() shortcutButtons: ButtonIconRound | any;
  // buttons = [
  //   {
  //     nameIcon: 'chevron_left',
  //     backgroundColor: '#00FF36',
  //     foregroundColor: '#2a9c2a',
  //     data: '',
  //     output: this.sideButton
  //   },
  //   {
  //     nameIcon: 'done_all',
  //     backgroundColor: '#00FF36',
  //     foregroundColor: '#00FF36',
  //     data: '',
  //     output: this.sideButton
  //   }
  // ]

  // login button
  loginBtn: ButtonIconRound = {
    nameIcon: 'login',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    data: '',
    size: 50,
    output: this.redirectToLogin
  };

  // back button
  backBtn: ButtonIconRound = {
    nameIcon: 'home',
    backgroundColor: '#476452',
    foregroundColor: '#ffffff',
    data: '',
    size: 50,
    output: this.redirectToLogin
  };

  // logout button
  logoutBtn: ButtonIconRound = {
    nameIcon: 'logout',
    backgroundColor: '#8B0000',
    foregroundColor: '#ffffff',
    data: '',
    size: 50,
    output: this.redirectToLogin
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
