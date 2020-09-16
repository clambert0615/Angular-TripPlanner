import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute} from '@angular/router';
import { PlacesService } from './../places.service';
import { Result, Places, PlaceDetails } from './../places.model';
import { ZipdataService } from '../zipdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  place_id: any;
  data: PlaceDetails;
  constructor(public placesService: PlacesService, public router: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.place_id = this.actRoute.snapshot.params.id;
    console.log(this.place_id);
    this.getDetails(this.place_id);
  }
getDetails(id){
  return this.placesService.getDetails(id).subscribe((data: PlaceDetails) => {
    this.data = data;
  });
}
}
