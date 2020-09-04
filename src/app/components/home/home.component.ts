import { Component, OnInit } from '@angular/core';
import { homeRoute, personsRoute, teamsRoute, studyRoute } from 'src/app/models/constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeRoute = homeRoute;
  personRoute = personsRoute;
  teamsRoute = teamsRoute;
  studyRoute = studyRoute;

  constructor() { }

  ngOnInit(): void {
  }

}
