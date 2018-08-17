import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadImageFromDiskPage } from './load-image-from-disk.page';

describe('LoadImageFromDiskPage', () => {
  let component: LoadImageFromDiskPage;
  let fixture: ComponentFixture<LoadImageFromDiskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadImageFromDiskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadImageFromDiskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
