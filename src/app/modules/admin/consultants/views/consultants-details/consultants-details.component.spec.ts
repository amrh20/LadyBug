import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsDetailsComponent } from './consultants-details.component';

describe('ConsultantsDetailsComponent', () => {
  let component: ConsultantsDetailsComponent;
  let fixture: ComponentFixture<ConsultantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
