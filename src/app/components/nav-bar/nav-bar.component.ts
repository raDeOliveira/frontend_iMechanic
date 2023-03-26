import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonIconRound } from 'src/app/model/btn-icon-round.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router) { }

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
