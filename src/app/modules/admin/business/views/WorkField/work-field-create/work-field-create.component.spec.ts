import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFieldCreateComponent } from './work-field-create.component';

describe('WorkFieldCreateComponent', () => {
  let component: WorkFieldCreateComponent;
  let fixture: ComponentFixture<WorkFieldCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFieldCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFieldCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
