import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { UserserviceService } from './../userservice.service';
import { Favorites } from './../favorites.model';
import { PlaceDetails } from './../places.model';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public user: any;
  data: any;
  place_id: any;
  constructor(public router: Router, public userservice: UserserviceService) { }

  ngOnInit(): void {
    this.user = this.userservice.UserId;
    this.getFavorites();
  }
  getFavorites(){
      return this.userservice.getFavorites(this.user).subscribe((data: any) => {
      this.data = data;
    });
  }
  deleteFavorite(place_id)
  {
    return this.userservice.deleteFavorite(this.user, place_id).subscribe((data: any) => {
      this.data = data;
      this.getFavorites();
    });
  }

}
