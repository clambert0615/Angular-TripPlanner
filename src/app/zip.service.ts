import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentKeys} from './../environments/environmentkeys';

@Injectable({
  providedIn: 'root'
})
export class ZipService {
  zipAPIKey = EnvironmentKeys.zipJSKey;
  readonly zipBase = 'http://www.zipcodeapi.com/rest/';
  constructor(private httpclient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
  
    }),
  };
  getZip(city, state)
  {
   return this.httpclient.get(`${this.zipBase}/${this.zipAPIKey}/city-zips.json/${city}/${state}`, {responseType: 'json'});
  }

  getCity(zip)
  {
    return this.httpclient.get(`${this.zipBase}/${this.zipAPIKey}/info.json/${zip}/degrees`, {responseType: 'json'});
  }
  }
