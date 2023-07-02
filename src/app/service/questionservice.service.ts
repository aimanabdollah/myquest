import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionserviceService {
  private baseApiUrl = 'https://localhost:7162';
  constructor(private http: HttpClient) {}

  // getJson() {
  //   return this.http.get<any>('assets/angular.json');
  // }

  getJson() {
    return this.http.get<any>(
      'https://myquestapi.azurewebsites.net/api/MyQuest'
      //'https://localhost:7162/api/MyQuest'
    );
  }
}
