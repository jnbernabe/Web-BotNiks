import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private data: IncidentRepository) {}

  get incidents(): Incident[] {
    return this.data.getIncidents();
  }

  ngOnInit(): void {
    console.log(this.data.getIncidents());
  }
}
