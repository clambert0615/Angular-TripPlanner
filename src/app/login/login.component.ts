import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './../userservice.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: UserserviceService, public Router: Router) { }
  data: any;
  LoginName: any;
  Password: any;
  LoginForm: FormGroup;
  ngOnInit() {
    this.resetForm();
    this.LoginForm = new FormGroup ({
      LoginName: new FormControl(''),
      Password: new FormControl(''),
    });
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }
  
  }

  login() {
    console.log("Hi");
    
    this.service.getUser(this.LoginForm.controls['LoginName'].value).subscribe((data: any[]) => {
      this.data = data;
      if(this.data.Password === this.LoginForm.controls['Password'].value)
      {
        //do something
      }
      console.log(data);
    });
  }
}
