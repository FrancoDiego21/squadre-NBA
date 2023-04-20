import { Component, Input } from '@angular/core';
import { Teams } from '../models/teams.model'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  @Input() teams: Teams;


}
