import { Component, OnInit } from '@angular/core';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';
import { Incident } from '../model/incident.model';
import { Customer } from '../model/customer.model';
import { User } from '../model/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../config/http-service.service';

let counter = 1;

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css'],
})
export class CreateIncidentComponent implements OnInit {
  incidentId = this.createTicketNumber();

  //for listing all elements of priority enum as an option in the html forms
  priority = Priority;
  priorities(): Array<string> {
    var keys = Object.keys(this.priority);
    return keys.slice(keys.length / 2);
  }

  //for listing all elements of the status enum as an option in the html forms
  status = Status;
  statuses(): Array<string> {
    var status = Object.keys(this.status);
    return status.slice(status.length / 2);
  }
  //Form Group
  incidentForm = new FormGroup({
    incidentNumber: new FormControl(this.incidentId),
    incidentPriority: new FormControl(''),
    incidentStatus: new FormControl(Status[1]),
    customerFName: new FormControl(''),
    customerLName: new FormControl(''),
    customerEmail: new FormControl(''),
    customerPhone: new FormControl(''),
    incidentDescription: new FormControl(''),
    incidentNarrative: new FormControl(''),
  });

  createTicketNumber(): string {
    let d = new Date();
    let dateNumber =
      d.getFullYear().toString() +
      d.getMonth().toString() +
      d.getDate().toString() +
      '-' +
      counter.toString();
    console.log(dateNumber);
    return dateNumber;
  }

  createIncident(): Incident {
    let customer = new Customer(
      this.incidentForm.get('customerFName')?.value,
      this.incidentForm.get('customerLName')?.value,
      this.incidentForm.get('customerEmail')?.value,
      this.incidentForm.get('customerPhone')?.value
    );

    let user = new User(
      'John',
      'Smith',
      'js@lmkasdfu@o21u3',
      'type?',
      '1238798123',
      'UserType?'
    );

    let dateCreated = new Date();

    let obj = new Incident(
      this.incidentForm.get('incidentNumber')?.value,
      Priority[this.incidentForm.get('incidentPriority')?.value],
      Status[this.incidentForm.get('incidentStatus')?.value],
      user,
      dateCreated,
      this.incidentForm.get('incidentDescription')?.value,
      this.incidentForm.get('incidentNarrative')?.value,
      customer
    );
    let jsonobj = JSON.stringify(obj);
    console.log(jsonobj);

    counter++;

    return obj;
  }

  constructor() {}

  ngOnInit(): void {}
}
