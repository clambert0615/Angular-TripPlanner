import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Eating, Places } from './../places.model';
import { ZipdataService } from '../zipdata.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(public placesService: PlacesService, public router: Router, public zipdataService: ZipdataService) { }
  lat: any;
  lng: any;
  data: Eating;
  place_id: any;
  pagetoken: any;
  data2: Eating;
  ngOnInit(): void {
    this.lat = this.zipdataService.lat;
    this.lng = this.zipdataService.lng;

    this.getRestaurants(this.lat, this.lng);
  }
getRestaurants(lat, lng){
 this.placesService.getRestaurants(lat, lng).subscribe((data: Eating) => {
     this.data = data;
     this.pagetoken = data.next_page_token;
 });
}
 getMore(){
  this.placesService.getMorePLaces(this.pagetoken).subscribe((data2: Eating) => {
    this.data2 = data2;
    this.zipdataService.data = data2;
    this.router.navigate(['more']);
  });
 }
}

