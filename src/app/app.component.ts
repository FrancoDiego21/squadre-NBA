import { Component } from '@angular/core';
import { Teams } from './models/teams.model'
import { serviceResponse } from './models/serviceResponse.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams : Teams[];
  serviceResponse : serviceResponse[];
  oServiceResponse : Observable<serviceResponse>
  serviceURL = 'https://www.balldontlie.io/api/v1/teams/';

  constructor(public http:HttpClient){
    this.makeTypedRequest()
  }

  makeTypedRequest() : void{
    this.oServiceResponse = this.http.get<serviceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.teams = d.data;});
  }

  sort() {
    this.teams = this.teams.sort((a, b) => a.conference.localeCompare(b.conference) || a.division.localeCompare(b.division));
  }

}
