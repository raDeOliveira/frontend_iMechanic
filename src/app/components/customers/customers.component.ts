import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  customers: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://localhost:7166/api/customers")
      .subscribe({
        next: (result: any) => this.customers = result,
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

}
