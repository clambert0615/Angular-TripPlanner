import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ZipdataService } from '../zipdata.service';
import { ZipService } from '../zip.service';
import { City } from '../city.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  zip: any;
  city: any;
  state: any;
  lat: any;
  lng: any;
  data2: City;
  
  constructor(public zipService: ZipService, public zipDataService: ZipdataService) { }

  ngOnInit(): void {
    this.zip = this.zipDataService.zip;
    this.zipService.getCity(this.zip).subscribe((data2: City) => {
    this.data2 = data2;
    this.city = data2.city;
    this.state = data2.state;
    this.lat = data2.lat;
    this.lng = data2.lng;
   
    })
  }

}

