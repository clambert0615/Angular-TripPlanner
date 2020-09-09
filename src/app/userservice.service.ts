import { Injectable } from '@angular/core';
import {Users } from './users.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    }),
  };
formData: Users = new Users();
readonly rootURL = 'https://localhost:44381/api';



  getUser(username){
    return this.http.get(`${this.rootURL}/userapi/${username}`);
  }
  postUser(){
    return this.http.post(`${this.rootURL}/userapi`, this.formData);
  }
  putUser(username, formData){
   return this.http.put(`${this.rootURL}/userapi/${username}`, this.formData);
  }
  deleteUser(username){
    return this.http.delete(`${this.rootURL}/userapi/${username}`);
  }
}

