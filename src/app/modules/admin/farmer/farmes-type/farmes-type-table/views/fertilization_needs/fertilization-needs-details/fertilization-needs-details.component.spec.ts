import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizationNeedsDetailsComponent } from './fertilization-needs-details.component';

describe('FertilizationNeedsDetailsComponent', () => {
  let component: FertilizationNeedsDetailsComponent;
  let fixture: ComponentFixture<FertilizationNeedsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizationNeedsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizationNeedsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
