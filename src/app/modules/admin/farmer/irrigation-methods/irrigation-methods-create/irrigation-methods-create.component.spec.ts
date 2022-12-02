import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationMethodsCreateComponent } from './irrigation-methods-create.component';

describe('IrrigationMethodsCreateComponent', () => {
  let component: IrrigationMethodsCreateComponent;
  let fixture: ComponentFixture<IrrigationMethodsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrigationMethodsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationMethodsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
