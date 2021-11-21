/*
By: Han Bi

Form Component for creating new Incidents and Editing existing ones
*/

import { IncidentRepository } from './../model/incident.repository';
import { Component, OnInit } from '@angular/core';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';
import { Incident } from '../model/incident.model';
import { Customer } from '../model/customer.model';
import { User } from '../model/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { IncidentNumberGenerator } from '../model/incident-number-generator.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IncidentService } from '../config/incident.service';
import { StaticDataSource } from '../model/static.datasource';

let counter = 1;
let isEdit = false;
let id = '';
let prio = Priority[2];
let stat = Status[1];
let fName = '';
let lName = '';
let email = '';
let phone = '';
let desc = '';
let narrative = '';
let editedObj: any;

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css'],
})
export class CreateIncidentComponent implements OnInit {
  incidentId = this.createTicketNumber();
  editMode = isEdit;
  incident!: Incident;
  anotherIncident?: Incident[];
  test!: IncidentRepository;

  //for listing all elements of priority enum as an option in the html forms
  priority = Priority;
  priorities(): Array<string> {
    let priority = Object.keys(this.priority);
    return priority.slice(priority.length / 2);
  }

  //for listing all elements of the status enum as an option in the html forms
  status = Status;
  statuses(): Array<string> {
    let status = Object.keys(this.status);
    return status.slice(status.length / 2);
  }
  //Form Group
  incidentForm = new FormGroup({
    incidentNumber: new FormControl(id),
    incidentPriority: new FormControl(prio),
    incidentStatus: new FormControl(stat),
    customerFName: new FormControl(fName),
    customerLName: new FormControl(lName),
    customerEmail: new FormControl(email),
    customerPhone: new FormControl(phone),
    incidentDescription: new FormControl(desc),
    incidentNarrative: new FormControl(narrative),
  });
  //creates a string of numbers using date and incrementer
  createTicketNumber(): string {
    let d = new Date();
    let dateNumber =
      d.getFullYear().toString() +
      d.getMonth().toString() +
      d.getDate().toString() +
      '-' +
      d.getHours().toString() +
      d.getMinutes().toString() +
      d.getSeconds().toString();
    console.log(dateNumber);
    return dateNumber;
  }
  //creates an incident using values provided in the form
  createIncident(): void {
    let customer = new Customer(
      this.incidentForm?.get('customerFName')?.value,
      this.incidentForm?.get('customerLName')?.value,
      this.incidentForm?.get('customerEmail')?.value,
      this.incidentForm?.get('customerPhone')?.value
    );

    let user = this.testclass.User1;

    let dateCreated = this.testclass.Date1;

    let obj = new Incident(
      this.incidentForm?.get('incidentNumber')?.value,
      this.incidentForm?.get('incidentPriority')?.value,
      this.incidentForm?.get('incidentStatus')?.value,
      user,
      dateCreated,
      this.incidentForm?.get('incidentDescription')?.value,
      this.incidentForm?.get('incidentNarrative')?.value,
      customer
    );
    this.incident = obj;
  }

  //populates form if object exists
  public initForm() {
    console.log('initForm is being called');
    console.log(this.data['incidents'].length);
    if (isEdit == true) {
      this.incidentForm
        .get('incidentNumber')
        ?.setValue(editedObj['incidentID']);
      this.incidentForm
        .get('incidentPriority')
        ?.setValue(editedObj['priority']);
      this.incidentForm?.get('incidentStatus')?.setValue(editedObj['status']);
      this.incidentForm?.get('customerFName')?.setValue(editedObj['firstName']);
      this.incidentForm?.get('customerLName')?.setValue(editedObj['lastName']);
      this.incidentForm?.get('customerEmail')?.setValue(editedObj['email']);
      this.incidentForm
        ?.get('customerPhone')
        ?.setValue(editedObj['phoneNumber']);
      this.incidentForm
        ?.get('incidentDescription')
        ?.setValue(editedObj['description']);
      this.incidentForm
        ?.get('incidentNarrative')
        ?.setValue(editedObj['narrative']);
    } else {
      this.incidentForm.get('incidentNumber')?.setValue(id);
      this.incidentForm.get('incidentPriority')?.setValue(prio);
      this.incidentForm?.get('incidentStatus')?.setValue(stat);
      this.incidentForm?.get('customerFName')?.setValue(fName);
      this.incidentForm?.get('customerLName')?.setValue(lName);
      this.incidentForm?.get('customerEmail')?.setValue(email);
      this.incidentForm?.get('customerPhone')?.setValue(phone);
      this.incidentForm?.get('incidentDescription')?.setValue(desc);
      this.incidentForm?.get('incidentNarrative')?.setValue(narrative);
    }
  }
  routeSub!: Subscription;

  addIncident2() {
    this.incidentservice.postIncident(this.incident).subscribe((data) => {
      console.log(data);
      this.incidentservice.getIncidents();
    });
  }

  constructor(
    public counter: IncidentNumberGenerator,
    public data: IncidentRepository,
    public route: ActivatedRoute,
    public incidentservice: IncidentService,
    public testclass: StaticDataSource
  ) {}

  ngOnInit(): void {
    this.data.waitForData().then((result) => {
      this.routeSub = this.route.params.subscribe((params) => {
        if (params['id'] != null) {
          console.log('This is from NgOnInit (the route id)', params['id']);
          editedObj = this.data.getIncident(params['id']);
          console.log(editedObj);
          console.log(editedObj['incidentID']);
          if (editedObj !== null) {
            isEdit = true;
          }
        }
        this.initForm();
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
