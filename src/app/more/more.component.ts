import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Places } from './../places.model';
import { ZipdataService } from '../zipdata.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
   data: Places;
   pagetoken: any;

  constructor(public router: Router, public placesService: PlacesService, public zipdataService: ZipdataService) { }

  ngOnInit(): void {
    this.data = this.zipdataService.data;
    this.pagetoken = this.data.next_page_token;
  }
getMore(){
    this.placesService.getMorePLaces(this.pagetoken).subscribe((data: Places) => {
      this.data = data;
    });
}

}
