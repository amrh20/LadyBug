import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringUnitsIndexComponent } from './measuring-units-index.component';

describe('MeasuringUnitsIndexComponent', () => {
  let component: MeasuringUnitsIndexComponent;
  let fixture: ComponentFixture<MeasuringUnitsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuringUnitsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringUnitsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
