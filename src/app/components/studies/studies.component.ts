import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { studyUrl } from 'src/app/models/constants/studyUrl';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  studies;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudies().toPromise().then(result => {
      console.log(result);
      this.studies = result;
    });
  }

  getStudies(){
    return this.http.get(studyUrl);
  }

}
