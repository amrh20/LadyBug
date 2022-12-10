import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmedTypeNutValsDetalisComponent } from './farmed-type-nut-vals-detalis.component';

describe('FarmedTypeNutValsDetalisComponent', () => {
  let component: FarmedTypeNutValsDetalisComponent;
  let fixture: ComponentFixture<FarmedTypeNutValsDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmedTypeNutValsDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmedTypeNutValsDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
