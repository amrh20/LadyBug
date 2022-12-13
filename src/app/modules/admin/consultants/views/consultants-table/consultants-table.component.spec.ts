import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsTableComponent } from './consultants-table.component';

describe('ConsultantsTableComponent', () => {
  let component: ConsultantsTableComponent;
  let fixture: ComponentFixture<ConsultantsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
