import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './../userservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public service: UserserviceService, public router: Router) { }

  ngOnInit(): void {
    this.service.isloggedin = false;
  }

}
