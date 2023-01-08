import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReportsTypesComponent } from './all-reports-types.component';

describe('AllReportsTypesComponent', () => {
  let component: AllReportsTypesComponent;
  let fixture: ComponentFixture<AllReportsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReportsTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
