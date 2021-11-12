import { Component, OnInit } from '@angular/core';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css'],
})
export class CreateIncidentComponent implements OnInit {
  priority = Priority;
  priorities(): Array<string> {
    var keys = Object.keys(this.priority);
    return keys;
  }

  status = Status;
  statuses(): Array<string> {
    var status = Object.keys(this.status);
    return status;
  }

  constructor() {}

  ngOnInit(): void {}
}
