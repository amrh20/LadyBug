import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseRegistrationsViewComponent } from './disease-registrations-view.component';

describe('DiseaseRegistrationsViewComponent', () => {
  let component: DiseaseRegistrationsViewComponent;
  let fixture: ComponentFixture<DiseaseRegistrationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseRegistrationsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseRegistrationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
