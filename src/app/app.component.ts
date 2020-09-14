import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { UserserviceService } from './userservice.service'; 
import { Users } from './users.model';
import { ZipService } from './zip.service';
import { ZipdataService } from './zipdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userserviceService: UserserviceService, public router: Router,
              public zipservice: ZipService, public zipdataservice: ZipdataService){}
  title = 'angulartrip';
  
}
