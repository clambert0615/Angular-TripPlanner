import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './../userservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {

  constructor(public service: UserserviceService, public router: Router, 
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.isloggedin = false;
    this.service.UserId = undefined;
  }

}
