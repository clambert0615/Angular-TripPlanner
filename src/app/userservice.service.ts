import { Injectable } from '@angular/core';
import {Users } from './users.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  isloggedin: boolean;
  constructor(private http: HttpClient) { 
    this.isloggedin = false;
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    }),
  };
formData: Users = new Users();
formData2: Login = new Login();
readonly rootURL = 'https://localhost:44381/api';



  getUser(loginname){
    return this.http.get(`${this.rootURL}/userapi/${loginname}`);
  }
  postUser(){
    return this.http.post(`${this.rootURL}/userapi`, this.formData);
  }
  putUser(loginname, formData){
   return this.http.put(`${this.rootURL}/userapi/${loginname}`, this.formData);
  }
  deleteUser(loginname){
    return this.http.delete(`${this.rootURL}/userapi/${loginname}`);
  }
}

