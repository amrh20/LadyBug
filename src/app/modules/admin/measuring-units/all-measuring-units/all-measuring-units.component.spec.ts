import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeasuringUnitsComponent } from './all-measuring-units.component';

describe('AllMeasuringUnitsComponent', () => {
  let component: AllMeasuringUnitsComponent;
  let fixture: ComponentFixture<AllMeasuringUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMeasuringUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMeasuringUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
