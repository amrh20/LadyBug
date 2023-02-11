import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveDiseaseTableComponent } from './sensitive-disease-table.component';

describe('SensitiveDiseaseTableComponent', () => {
  let component: SensitiveDiseaseTableComponent;
  let fixture: ComponentFixture<SensitiveDiseaseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensitiveDiseaseTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitiveDiseaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
