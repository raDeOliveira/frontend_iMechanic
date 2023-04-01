import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from 'src/app/model/authenticated.response';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean | undefined;
  invalidSignup: boolean | undefined;
  credentials: User = { name: '', password: '' };
  retypePassword: string = '';

  constructor(private router: Router, private http: HttpClient, private apiService: ApiService) { }

  // login
  login = (form: NgForm) => {
    if (form.valid) {
      this.http
        .post<AuthenticatedResponse>(this.apiService.apiUri + '/auth/login', this.credentials,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          }
        )
        .subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.token;
            localStorage.setItem('jwt', token);
            this.invalidLogin = false;
            this.apiService.getUserInSession(this.credentials.name);
            this.router.navigate(['/iMechanic']);
          },
          error: (err: HttpErrorResponse) => (this.invalidLogin = true),
        });
    }
  };

  // signup
  signup = (form: NgForm) => {
    if (form.valid) {
      if (this.retypePassword != this.credentials.password) {
        this.invalidSignup = true;
      } else {
        this.http
          .post(this.apiService.apiUri + '/auth/signup', this.credentials,
            {
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

  ngOnInit(): void {
  }


}

