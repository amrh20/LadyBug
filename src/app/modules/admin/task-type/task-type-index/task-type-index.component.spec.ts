import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypeIndexComponent } from './task-type-index.component';

describe('TaskTypeIndexComponent', () => {
  let component: TaskTypeIndexComponent;
  let fixture: ComponentFixture<TaskTypeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTypeIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTypeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
