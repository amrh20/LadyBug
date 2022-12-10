import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmedTypeNutValsCreateComponent } from './farmed-type-nut-vals-create.component';

describe('FarmedTypeNutValsCreateComponent', () => {
  let component: FarmedTypeNutValsCreateComponent;
  let fixture: ComponentFixture<FarmedTypeNutValsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmedTypeNutValsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmedTypeNutValsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
