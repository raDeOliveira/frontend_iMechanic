
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiUri = 'https://localhost:7166/api/cars';

    constructor(private http: HttpClient) { }

    selectedCar: any | string;

    // get all brands
    getAllBrands(): Observable<any> {
        return this.http.get<any>(this.apiUri + '/brands');
    }

    // get all models by brand
    getAllModelsByBrand(brand: string): Observable<[]> {
        return this.http.get<any>(this.apiUri + '/models/' + brand);
    }

    // get all fuels
    getAllFuels(): Observable<any> {
        return this.http.get<any>(this.apiUri + '/fuels');
    }

    // get all years
    getAllYears(): Observable<any> {
        return this.http.get<any>(this.apiUri + '/years');
    }

    // get selected car
    getSelectedCar(brand: string, model: string, fuel: string): Observable<any> {
        return this.http.get<any>(this.apiUri + '/' + brand + '/' + model + '/' + fuel);
    }


}
