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

  public Date1 = new Date('11-11-2021');

  public incidents: Incident[] = [
    new Incident(
      '1',
      'Medium',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 1',
      'Narrative 1',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '2',
      'Medium',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 2',
      'Narrative 2',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '3',
      'High',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 3',
      'Narrative 3',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '4',
      'Medium',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 4',
      'Narrative 4',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '5',
      'Medium',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 5',
      'Narrative 5',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '6',
      'Low',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 6',
      'Narrative 6',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '7',
      'High',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 7',
      'Narrative 7',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '8',
      'Medium',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 8',
      'Narrative 8',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '9',
      'Low',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 9',
      'Narrative 9',
      'Default Resolution',
      'Perry Cox'
    ),
    new Incident(
      '10',
      'Medium',
      'New',
      'BKing',
      '11-11-2021',
      'Short Description 10',
      'Narrative 10',
      'Default Resolution',
      'Perry Cox'
    ),
  ];
  getIncidents(): Observable<Incident[]> {
    return from([this.incidents]);
  }
}
