
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as questionsJSON from "../../assets/questions.json"
import { Question } from '../model/question';

// call questions JSON
const quest = questionsJSON;


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    // API URL
    apiUri = 'https://localhost:7166/api';

    @Output() userInSession = new EventEmitter();
    selectedCar: any | string;
    stringifiedQuestions = JSON.stringify(quest.questions);
    questions: Question[] = JSON.parse(this.stringifiedQuestions);


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

    // get option car
    getOptionCar(brand: string, model: string, fuel: string): Observable<any> {
        return this.http.get<any>(this.apiUri + '/cars/optionCar/' + brand + '/' + model + '/' + fuel);
    };

    // get selected car
    getSelectedCar(brand: string, model: string, fuel: string, option: string): Observable<any> {
        return this.http.get<any>(this.apiUri + '/cars/selectedCar/' + brand + '/' + model + '/' + fuel + '/' + option);
    };

    // get user in session
    getUserInSession(user: any) {
        this.userInSession.emit(user);
    };


}
