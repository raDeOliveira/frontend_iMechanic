
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // API URL
    apiUri = 'https://localhost:7166/api';

    @Output() userInSession = new EventEmitter();
    selectedCar: any | string;
    questions!: any | [];

    constructor(private http: HttpClient) { }


    // get all brands
    getAllBrands(): Observable<any> {
        return this.http.get<any>(this.apiUri + '/cars/brands');
    };

    // get all models by brand
    getAllModelsByBrand(brand: string): Observable<[]> {
        return this.http.get<any>(this.apiUri + '/cars/models/' + brand);
    };

    // get all fuels
    getAllFuels(): Observable<any> {
        return this.http.get<any>(this.apiUri + '/cars/fuels');
    };

    // get all years
    getAllYears(): Observable<any> {
        return this.http.get<any>(this.apiUri + '/cars/years');
    };

    // get selected car
    getSelectedCar(brand: string, model: string, fuel: string): Observable<any> {
        return this.http.get<any>(this.apiUri + '/cars/' + brand + '/' + model + '/' + fuel);
    };

    // get user in session
    getUserInSession(user: any) {
        this.userInSession.emit(user);
    };


}
