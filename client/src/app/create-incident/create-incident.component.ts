import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Priority } from '../model/priority.enum';
import { Report } from '../model/report.model';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css'],
})
export class CreateIncidentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
