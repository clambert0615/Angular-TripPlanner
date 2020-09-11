import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserserviceService } from './../userservice.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public service: UserserviceService, public Router: Router) { }
  LocationForm: FormGroup;
  data: any;

  ngOnInit() {
    this.resetForm();
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

}
