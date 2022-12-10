import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizationNeedsTableComponent } from './fertilization-needs-table.component';

describe('FertilizationNeedsTableComponent', () => {
  let component: FertilizationNeedsTableComponent;
  let fixture: ComponentFixture<FertilizationNeedsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizationNeedsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizationNeedsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
