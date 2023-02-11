import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationRatesTableComponent } from './irrigation-rates-table.component';

describe('IrrigationRatesTableComponent', () => {
  let component: IrrigationRatesTableComponent;
  let fixture: ComponentFixture<IrrigationRatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigationRatesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationRatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
