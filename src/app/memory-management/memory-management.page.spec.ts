import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryManagementPage } from './memory-management.page';

describe('MemoryManagementPage', () => {
  let component: MemoryManagementPage;
  let fixture: ComponentFixture<MemoryManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
