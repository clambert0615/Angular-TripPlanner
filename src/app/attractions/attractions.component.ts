import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Attractions } from './../places.model';
import { ZipdataService } from '../zipdata.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
  data: Attractions;
  lat: any;
  lng: any;
  place_id: any;
  constructor(public placesService: PlacesService, router: Router, public zipdataService: ZipdataService) { }

  ngOnInit(): void {
    this.lat = this.zipdataService.lat;
    this.lng = this.zipdataService.lng;
    this.getAttractions(this.lat, this.lng);
  }
getAttractions(lat, lng){
  return this.placesService.getAttractions(lat, lng).subscribe((data: Attractions) => {
    this.data = data;
  });
}
}
