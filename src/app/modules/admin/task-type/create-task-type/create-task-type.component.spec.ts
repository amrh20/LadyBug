import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskTypeComponent } from './create-task-type.component';

describe('CreateTaskTypeComponent', () => {
  let component: CreateTaskTypeComponent;
  let fixture: ComponentFixture<CreateTaskTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTaskTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
