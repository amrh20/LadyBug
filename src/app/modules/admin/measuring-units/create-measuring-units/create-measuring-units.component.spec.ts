import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeasuringUnitsComponent } from './create-measuring-units.component';

describe('CreateMeasuringUnitsComponent', () => {
  let component: CreateMeasuringUnitsComponent;
  let fixture: ComponentFixture<CreateMeasuringUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMeasuringUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMeasuringUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
