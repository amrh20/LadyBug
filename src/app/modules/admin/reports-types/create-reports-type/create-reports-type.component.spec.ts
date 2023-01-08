import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportsTypeComponent } from './create-reports-type.component';

describe('CreateReportsTypeComponent', () => {
  let component: CreateReportsTypeComponent;
  let fixture: ComponentFixture<CreateReportsTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportsTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
