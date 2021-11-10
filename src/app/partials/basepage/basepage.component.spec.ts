/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasepageComponent } from './basepage.component';

describe('BasepageComponent', () => {
  let component: BasepageComponent;
  let fixture: ComponentFixture<BasepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
