import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { UserserviceService } from './userservice.service'; 
import { Users } from './users.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public UserserviceService: UserserviceService, public router: Router){}
  title = 'angulartrip';
  
}
