import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  constructor(private http: HttpClient) { }

  getJson(){
    return this.http.get<any>("assets/angular.json");
  }
}
