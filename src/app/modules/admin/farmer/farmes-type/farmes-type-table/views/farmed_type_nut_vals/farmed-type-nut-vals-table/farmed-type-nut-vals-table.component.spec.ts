import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmedTypeNutValsTableComponent } from './farmed-type-nut-vals-table.component';

describe('FarmedTypeNutValsTableComponent', () => {
  let component: FarmedTypeNutValsTableComponent;
  let fixture: ComponentFixture<FarmedTypeNutValsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmedTypeNutValsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmedTypeNutValsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
