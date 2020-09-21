import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserserviceService } from './../userservice.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { ZipService } from '../zip.service';
import { Zip } from '../zip.model';
import { City } from '../city.model';
import { ZipdataService } from '../zipdata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public service: UserserviceService, public router: Router,
              public zipService: ZipService, public zipDataService: ZipdataService) { }
  LocationForm: FormGroup;
  data: Zip;
  data2: City;
  zip: any;
  city: any;
  state: any;
  lat: any;
  lng: any;
  user: any;
   ngOnInit() {
     this.resetForm();
     this.user = this.service.UserId;
     this.LocationForm = new FormGroup ({
       Zip: new FormControl(''),
       City: new FormControl(''),
      State: new FormControl('')
   });
   }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
     }
   }

  getLocation()
  {
      // tslint:disable-next-line: max-line-length
      if (this.LocationForm.controls.City.value !== null && this.LocationForm.controls.State.value !== null && this.LocationForm.controls.Zip.value === '')
      {
      // tslint:disable-next-line: max-line-length
      this.zipService.getZip(this.LocationForm.controls.City.value, this.LocationForm.controls.State.value).subscribe((data: Zip) => {
        this.data = data;
        this.zip = data.zip_codes[0];
        this.zipDataService.zip = this.zip;
        this.service.UserId = this.user;
        console.log(this.zip);
        // this.zipDataService.city = this.LocationForm.controls['City'].value;
        // this.zipDataService.state = this.LocationForm.controls['State'].value;
        this.router.navigate(['overview']);

  });

 }
      // tslint:disable-next-line: max-line-length
      else if (this.LocationForm.controls.Zip.value !== null && this.LocationForm.controls.City.value === '' && this.LocationForm.controls.State.value === '')
      {
        this.zipService.getCity(this.LocationForm.controls.Zip.value).subscribe((data2: City) => {
          this.data2 = data2;
          // this.city = data2.city;
          // this.state = data2.state;
          this.zipDataService.lat = data2.lat;
          this.zipDataService.lng = data2.lng;
          this.zipDataService.zip = this.LocationForm.controls.Zip.value;
          this.service.UserId = this.user;
          console.log(this.zipDataService.lat, this.zipDataService.lng);
          // this.zipDataService.city = this.city;
          // this.zipDataService.state = this.state;

          this.router.navigate(['overview']);
       });

      }
      else
      {
        console.log('error');
      }
}}
