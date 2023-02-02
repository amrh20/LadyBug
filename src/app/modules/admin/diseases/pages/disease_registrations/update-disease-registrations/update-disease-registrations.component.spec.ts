import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDiseaseRegistrationsComponent } from './update-disease-registrations.component';

describe('UpdateDiseaseRegistrationsComponent', () => {
  let component: UpdateDiseaseRegistrationsComponent;
  let fixture: ComponentFixture<UpdateDiseaseRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDiseaseRegistrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDiseaseRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
