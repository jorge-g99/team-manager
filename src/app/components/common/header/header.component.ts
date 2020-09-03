import { Component, OnInit } from '@angular/core';
import { homeRoute, personsRoute, studyRoute, teamsRoute } from 'src/app/models/constants/routes';

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
  studyRoute = studyRoute;
  teamsRoute = teamsRoute;

  sideBarVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
