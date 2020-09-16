import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  readonly rootURL = 'https://localhost:44381/api';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
getRestaurants(latitude, longitude){
return this.httpClient.get(`${this.rootURL}/places/restaurants/${latitude}/${longitude}`);
}
getLodging(latitude, longitude){
  return this.httpClient.get(`${this.rootURL}/places/lodging/${latitude}/${longitude}`);
  }
  getAttractions(latitude, longitude){
    return this.httpClient.get(`${this.rootURL}/places/attractions/${latitude}/${longitude}`);
    }
getDetails(id){
  return this.httpClient.get(`${this.rootURL}/places/details/${id}`);
}
getMorePLaces(pagetoken){
  return this.httpClient.get(`${this.rootURL}/places//more/${pagetoken}`);
}
}
