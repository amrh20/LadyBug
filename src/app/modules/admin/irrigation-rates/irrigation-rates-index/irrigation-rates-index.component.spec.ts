import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationRatesIndexComponent } from './irrigation-rates-index.component';

describe('IrrigationRatesIndexComponent', () => {
  let component: IrrigationRatesIndexComponent;
  let fixture: ComponentFixture<IrrigationRatesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigationRatesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationRatesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
