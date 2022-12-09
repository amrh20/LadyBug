import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseRegistrationsTableComponent } from './disease-registrations-table.component';

describe('DiseaseRegistrationsTableComponent', () => {
  let component: DiseaseRegistrationsTableComponent;
  let fixture: ComponentFixture<DiseaseRegistrationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseRegistrationsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseRegistrationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
