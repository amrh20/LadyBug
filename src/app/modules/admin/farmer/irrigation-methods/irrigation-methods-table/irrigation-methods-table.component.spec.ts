import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationMethodsTableComponent } from './irrigation-methods-table.component';

describe('IrrigationMethodsTableComponent', () => {
  let component: IrrigationMethodsTableComponent;
  let fixture: ComponentFixture<IrrigationMethodsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigationMethodsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationMethodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
