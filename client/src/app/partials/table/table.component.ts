import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/config/table.service';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';
import { RegisterPostService } from '../../config/register.post.service';
TableService;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(
    private data: IncidentRepository,
    private customer: TableService,
    private user: RegisterPostService
  ) {}

  get incidents(): Incident[] {
    return this.data.getIncidents();
  }

  ngOnInit(): void {
    console.log(this.data.getIncidents());
  }
}
