import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoadImagePage } from "./load-image.page";

describe("LoadImagePage", () => {
  let component: LoadImagePage;
  let fixture: ComponentFixture<LoadImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadImagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
