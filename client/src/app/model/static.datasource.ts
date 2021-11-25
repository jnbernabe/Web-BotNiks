import { Injectable } from '@angular/core';
import { Incident } from './incident.model';
import { Customer } from './customer.model';
import { User } from './user.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  public User1 = new User(
    'BKing',
    'BKelso@gmail.com',
    'Bob',
    'Bob',
    'Kelso',
    'Doctor',
    '12345'
  );

  public Customer1 = new Customer(
    'Perry',
    'Cox',
    'Bethany@hotmail.com',
    '999-999-321'
  );

  public Date1 = new Date('11-11-11');

  public incidents: Incident[] = [
    new Incident(
      '1',
      'Medium',
      'New',
      this.User1,
      this.Date1,
      'Short Description 1',
      'Narrative 1',
      this.Customer1
    ),
    new Incident(
      '2',
      'Medium',
      'New',
      this.User1,
      this.Date1,
      'Short Description 2',
      'Narrative 2',
      this.Customer1
    ),
    new Incident(
      '3',
      'High',
      'New',
      this.User1,
      this.Date1,
      'Short Description 3',
      'Narrative 3',
      this.Customer1
    ),
    new Incident(
      '4',
      'Medium',
      'New',
      this.User1,
      this.Date1,
      'Short Description 4',
      'Narrative 4',
      this.Customer1
    ),
    new Incident(
      '5',
      'Medium',
      'New',
      this.User1,
      this.Date1,
      'Short Description 5',
      'Narrative 5',
      this.Customer1
    ),
    new Incident(
      '6',
      'Low',
      'New',
      this.User1,
      this.Date1,
      'Short Description 6',
      'Narrative 6',
      this.Customer1
    ),
    new Incident(
      '7',
      'High',
      'New',
      this.User1,
      this.Date1,
      'Short Description 7',
      'Narrative 7',
      this.Customer1
    ),
    new Incident(
      '8',
      'Medium',
      'New',
      this.User1,
      this.Date1,
      'Short Description 8',
      'Narrative 8',
      this.Customer1
    ),
    new Incident(
      '9',
      'Low',
      'New',
      this.User1,
      this.Date1,
      'Short Description 9',
      'Narrative 9',
      this.Customer1
    ),
    new Incident(
      '10',
      'Medium',
      'New',
      this.User1,
      this.Date1,
      'Short Description 10',
      'Narrative 10',
      this.Customer1
    ),
  ];
  getIncidents(): Observable<Incident[]> {
    return from([this.incidents]);
  }
}
