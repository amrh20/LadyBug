import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFieldTableComponent } from './work-field-table.component';

describe('WorkFieldTableComponent', () => {
  let component: WorkFieldTableComponent;
  let fixture: ComponentFixture<WorkFieldTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFieldTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
