import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkRequestsPage } from './network-requests.page';

describe('NetworkRequestsPage', () => {
  let component: NetworkRequestsPage;
  let fixture: ComponentFixture<NetworkRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
