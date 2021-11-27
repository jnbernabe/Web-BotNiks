import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/config/table.service';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';
import { RegisterPostService } from '../../config/register.post.service';
import { Router } from '@angular/router';
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
    private user: RegisterPostService,
    private router: Router
  ) {}

  get incidents(): Incident[] {
    return this.data.getIncidents();
  }

  ngOnInit(): void {
    this.data.waitForData().then((result) => {
      console.log(JSON.stringify(this.data['incidents']));
    });
  }

  deleteIncident(id: string): void
  {
    if (confirm('Are you sure?') && (id !== undefined))
    {
      this.data.deleteIncident(id);
    }
    else
    {
      window.location.reload(); // refresh fix
      //this.router.navigateByUrl('/admin/main/books');
    }
  }

}
