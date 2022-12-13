import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsWrapComponent } from './consultants-wrap.component';

describe('ConsultantsWrapComponent', () => {
  let component: ConsultantsWrapComponent;
  let fixture: ComponentFixture<ConsultantsWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantsWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
