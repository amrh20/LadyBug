import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizationNeedsCreateComponent } from './fertilization-needs-create.component';

describe('FertilizationNeedsCreateComponent', () => {
  let component: FertilizationNeedsCreateComponent;
  let fixture: ComponentFixture<FertilizationNeedsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizationNeedsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizationNeedsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
