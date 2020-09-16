import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Lodging, Places } from './../places.model';
import { ZipdataService } from '../zipdata.service';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})
export class LodgingComponent implements OnInit {
   lat: any;
   lng: any;
   data: Lodging;
  constructor(public placesService: PlacesService, public zipdataService: ZipdataService,
    public router: Router) { }

  ngOnInit(): void {
    this.lat = this.zipdataService.lat;
    this.lng = this.zipdataService.lng;
    this.getLodging(this.lat, this.lng);
  }
 getLodging(lat, lng)
 {
   this.placesService.getLodging(lat, lng).subscribe((data: Lodging) => {
     this.data = data;
   });
 }
}
