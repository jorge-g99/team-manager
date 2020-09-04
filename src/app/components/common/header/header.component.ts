import { Component, OnInit } from '@angular/core';
import { homeRoute, personsRoute, studyRoute, teamsRoute } from 'src/app/models/constants/routes';
import { ConfigService } from 'src/app/services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideOptions: boolean;
  isHome: boolean;
  homeRoute = homeRoute;
  personsRoute = personsRoute;
  teamsRoute = teamsRoute;
  studyRoute = studyRoute;

  sideBarVisible = false;

  constructor(public config: ConfigService, public router: Router) { }

  ngOnInit() {
    this.isHome = this.router.url === this.homeRoute;
    this.hideOptions = this.config.mobile || this.config.smallDesktop;
  }

}
