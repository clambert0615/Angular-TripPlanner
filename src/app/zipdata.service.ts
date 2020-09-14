import { Injectable } from '@angular/core';
import { City } from './city.model';
import { Zip } from './zip.model';


@Injectable({
  providedIn: 'root'
})
export class ZipdataService {
public zip: Zip;
public city: City;
public state: any;
public lng: any;
public lat: any;
  constructor() { }
}
