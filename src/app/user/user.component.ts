import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './../userservice.service';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  constructor(public service: UserserviceService, public Router: Router) { }
  userId: any;
  data: any;
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null){
    form.form.reset(); }
    this.service.formData = {
      UserName: '',
      LoginName: '',
      Password: '',
      Email: ''
    }
  }
    
    onsubmit(form: NgForm) {
      this.insertRecord(form);
      this.service.isloggedin = true;

    }

    insertRecord(form: NgForm){
      this.service.postUser().subscribe((data: any) => {
        this.data = data;
        this.service.UserId = data.UserId;
        console.log(this.service.UserId);
        this.resetForm(form);
        this.Router.navigate(['homepage']);
        },
        err => {console.log(err); }
      );
    }

  }


