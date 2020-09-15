import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidService {
  readonly rootURL = 'https://localhost:44381/api';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  getCovid(zip){
    
    return this.httpClient.get(`${this.rootURL}/covid/${zip}`);
  }
}
