import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPUIntensivePage } from './cpuintensive.page';

describe('CPUIntensivePage', () => {
  let component: CPUIntensivePage;
  let fixture: ComponentFixture<CPUIntensivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPUIntensivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPUIntensivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
