import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Incident } from './incident.model';

@Injectable()
export class IncidentRepository {
  private incidents: Incident[] = [];
  private priorities: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getIncidents().subscribe((data) => {
      this.incidents = data;
      // this.priorities = data
      //   .map((i) => i.Priority!)
      //   .filter((c, index, array) => array.indexOf(c) === index)
      //   .sort();
    });
  }

  getIncidents(): Incident[] {
    return this.incidents;
  }

  getIncident(id: string): Incident {
    return this.incidents.find((i) => i.id === id)!;
  }
}
