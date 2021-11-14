import { Component, OnInit } from '@angular/core';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';
import { Incident } from '../model/incident.model';
import { Customer } from '../model/customer.model';
import { User } from '../model/user.model';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../config/http-service.service';

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

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css'],
})
export class CreateIncidentComponent implements OnInit {
  incidentId = this.createTicketNumber();
  editMode = isEdit;

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
      counter.toString();
    console.log(dateNumber);
    return dateNumber;
  }
  //creates an incident using values provided in the form
  createIncident(): Incident {
    let customer = new Customer(
      this.incidentForm?.get('customerFName')?.value,
      this.incidentForm?.get('customerLName')?.value,
      this.incidentForm?.get('customerEmail')?.value,
      this.incidentForm?.get('customerPhone')?.value
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
      this.incidentForm?.get('incidentNumber')?.value,
      this.incidentForm?.get('incidentPriority')?.value,
      this.incidentForm?.get('incidentStatus')?.value,
      user,
      dateCreated,
      this.incidentForm?.get('incidentDescription')?.value,
      this.incidentForm?.get('incidentNarrative')?.value,
      customer
    );
    console.log(obj);
    console.log(obj.Status);
    console.log(obj.Priority);

    let jsonobj = JSON.stringify(obj);
    console.log(jsonobj);

    counter++;

    return obj;
  }

  //populates form if object exists
  private initForm() {
    if (isEdit == true) {
      //dummy object
      let obj = new Incident(
        '121211-01',
        'High',
        'InProgress',
        new User(
          'John',
          'Doe',
          'email@rogers.com',
          'Desursdfauo',
          '5467778248',
          'Admin'
        ),
        new Date(),
        'Short Description',
        'Short Narrative',
        new Customer('Han', 'Bi', 'example@hotmail.com', '4165255677')
      );
      this.incidentForm.get('incidentNumber')?.setValue(obj.id);
      this.incidentForm.get('incidentPriority')?.setValue(obj.Priority);
      this.incidentForm?.get('incidentStatus')?.setValue(obj.Status);
      this.incidentForm?.get('customerFName')?.setValue(obj.Customer.FName);
      this.incidentForm?.get('customerLName')?.setValue(obj.Customer.LName);
      this.incidentForm?.get('customerEmail')?.setValue(obj.Customer.Email);
      this.incidentForm?.get('customerPhone')?.setValue(obj.Customer.Number);
      this.incidentForm?.get('incidentDescription')?.setValue(obj.Description);
      this.incidentForm?.get('incidentNarrative')?.setValue(obj.Narrative);
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }
}
