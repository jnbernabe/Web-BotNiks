/*
Created by: Han
Version number for incident
Depreceated
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class IncidentNumberGenerator {
  public counter = 0;
  getCounter(): number {
    this.counter++;
    return this.counter;
  }

  ngOnInit(): void {}
}
