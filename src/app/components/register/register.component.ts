import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse } from 'src/app/model/authenticated.response';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  credentials: User = { Name: "", Email: "", Password: "" };
  invalidRegister: boolean | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  // register
  register = (form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:7166/api/auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
        .subscribe({
          next: (response: AuthenticatedResponse) => {
            const token = response.token;
            localStorage.setItem("jwt", token);
            this.invalidRegister = false;
            this.router.navigate(["/"]);
          },
          error: (err: HttpErrorResponse) => this.invalidRegister = true
        })
    }
  }

  ngOnInit(): void {
  }

}

