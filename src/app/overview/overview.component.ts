import { Component, NgModule, OnInit } from '@angular/core';
import { ZipdataService } from '../zipdata.service';
import { ZipService } from '../zip.service';
import { City } from '../city.model';
import { CovidService } from '../covid.service';
import { Covid } from '../covid.model';
import { Zip } from '../zip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})

export class OverviewComponent implements OnInit {
  public zip: Zip;
  public city: any;
  public state: any;
  public lat: any;
  public lng: any;
  public data2: City;
  public data: Covid;
  public date: any;
  public deathCt: any;
  public positiveCt: any;
  public recoveredCt: any;
  public  counties: any[];
  public histricData: any[];

  constructor(public zipService: ZipService, public zipDataService: ZipdataService,
              public covidService: CovidService, public router: Router) { }

  ngOnInit(): void {
    this.zip = this.zipDataService.zip;
   
    this.zipService.getCity(this.zip).subscribe((data2: City) => {
      this.data2 = data2;
      this.city = data2.city;
      this.state = data2.state;
      this.lat = data2.lat;
      this.lng = data2.lng;
      this.zipDataService.lat = this.lat;
      this.zipDataService.lng = this.lng;
    });

    this.covidService.getCovid(this.zip).subscribe((data: Covid) => {
      this.data = data;
      this.counties = data.counties;

    });
  }
 getNavigation(link)
 {
   this.router.navigate([link]);
 }
}
