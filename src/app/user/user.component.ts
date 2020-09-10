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
      // add in where to navigagte to next
    }

    insertRecord(form: NgForm){
      this.service.postUser().subscribe(
        res => {
          this.resetForm(form);
        },
        err => {console.log(err); }
      )
    }

  }


