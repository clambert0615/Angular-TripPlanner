import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Lodging } from './../places.model';
import { ZipdataService } from '../zipdata.service';
import { ZipService } from '../zip.service';
import { City } from '../city.model';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})
export class LodgingComponent implements OnInit {
   lat: any;
   lng: any;
   zip: any;
   data: Lodging;
   data3: City;
   place_id: any;
   pagetoken: any;
  constructor(public placesService: PlacesService, public zipdataService: ZipdataService,
    public zipService: ZipService, public router: Router) { }

  ngOnInit(): void {
    this.zip = this.zipdataService.zip;
    this.lat = this.zipdataService.lat;
    this.lng = this.zipdataService.lng;

    this.getLodging(this.lat, this.lng);
  }
 getLodging(lat, lng)
 {
   this.placesService.getLodging(lat, lng).subscribe((data: Lodging) => {
     this.data = data;
     this.pagetoken = data.next_page_token;
   });
 }
 getMore(){
  this.placesService.getMorePLaces(this.pagetoken).subscribe((data: Lodging) => {
    this.data = data;
    this.zipdataService.data = data;
    this.router.navigate(['more']);
  });
 }
}
