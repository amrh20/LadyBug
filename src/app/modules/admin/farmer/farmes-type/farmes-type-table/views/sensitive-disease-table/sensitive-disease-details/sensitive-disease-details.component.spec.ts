import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveDiseaseDetailsComponent } from './sensitive-disease-details.component';

describe('SensitiveDiseaseDetailsComponent', () => {
  let component: SensitiveDiseaseDetailsComponent;
  let fixture: ComponentFixture<SensitiveDiseaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensitiveDiseaseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitiveDiseaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
