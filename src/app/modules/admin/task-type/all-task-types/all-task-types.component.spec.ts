import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskTypesComponent } from './all-task-types.component';

describe('AllTaskTypesComponent', () => {
  let component: AllTaskTypesComponent;
  let fixture: ComponentFixture<AllTaskTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTaskTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTaskTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
