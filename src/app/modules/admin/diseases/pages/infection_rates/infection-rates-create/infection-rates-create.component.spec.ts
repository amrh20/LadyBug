import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectionRatesCreateComponent } from './infection-rates-create.component';

describe('InfectionRatesCreateComponent', () => {
  let component: InfectionRatesCreateComponent;
  let fixture: ComponentFixture<InfectionRatesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectionRatesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectionRatesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
