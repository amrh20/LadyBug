import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIrrigationRatesComponent } from './create-irrigation-rates.component';

describe('CreateIrrigationRatesComponent', () => {
  let component: CreateIrrigationRatesComponent;
  let fixture: ComponentFixture<CreateIrrigationRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIrrigationRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIrrigationRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
