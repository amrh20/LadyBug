import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectionRatesTableComponent } from './infection-rates-table.component';

describe('InfectionRatesTableComponent', () => {
  let component: InfectionRatesTableComponent;
  let fixture: ComponentFixture<InfectionRatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectionRatesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionRatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
