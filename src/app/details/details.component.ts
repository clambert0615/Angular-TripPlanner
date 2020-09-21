import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { PlacesService } from './../places.service';
import { Result, Places, PlaceDetails } from './../places.model';
import { ZipdataService } from '../zipdata.service';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  place_id: any;
  data: PlaceDetails;
  user: any;
  constructor(public placesService: PlacesService, public router: Router,
              private actRoute: ActivatedRoute, public userService: UserserviceService) { }

  ngOnInit(): void {
    this.place_id = this.actRoute.snapshot.params.id;
    this.user = this.userService.UserId;
    console.log(this.place_id);
    this.getDetails(this.place_id);
  }
getDetails(id){
  return this.placesService.getDetails(id).subscribe((data: PlaceDetails) => {
    this.data = data;
  });
}
addFavorite(){
  this.user = this.userService.UserId;
  console.log(this.place_id, this.user);
  return this.userService.postFavorite(this.place_id, this.user).subscribe((data: any) => {
    this.data = data;

  });
}

}
