import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from 'src/app/model/authenticated.response';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  checkPassword: boolean | undefined;
  invalidLogin: boolean | undefined;
  invalidSignup: boolean | undefined;
  credentials: User = { Name: '', Password: '' };
  retypePassword: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  // login
  login = (form: NgForm) => {
    if (form.valid) {
      this.http
        .post<AuthenticatedResponse>(
          'https://localhost:7166/api/auth/login',
          this.credentials,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          }
        )
        .subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.token;
            localStorage.setItem('jwt', token);
            this.invalidLogin = false;
            this.router.navigate(['/iMechanic']);
          },
          error: (err: HttpErrorResponse) => (this.invalidLogin = true),
        });
    }
  };

  // signup
  signup = (form: NgForm) => {
    if (form.valid) {
      if (this.retypePassword != this.credentials.Password) {
        this.invalidSignup = true;
        this.checkPassword = true;
      } else {
        this.http
          .post('https://localhost:7166/api/auth/signup', this.credentials, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          })
          .subscribe({
            next: () => {
              this.invalidSignup = false;
              this.router.navigate(['/']);
            },
            error: (err: HttpErrorResponse) => (this.invalidSignup = true),
          });
      }
    }
  };
}
