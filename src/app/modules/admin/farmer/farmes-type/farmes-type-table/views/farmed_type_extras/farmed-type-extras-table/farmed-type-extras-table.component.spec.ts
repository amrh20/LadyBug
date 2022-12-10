import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmedTypeExtrasTableComponent } from './farmed-type-extras-table.component';

describe('FarmedTypeExtrasTableComponent', () => {
  let component: FarmedTypeExtrasTableComponent;
  let fixture: ComponentFixture<FarmedTypeExtrasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmedTypeExtrasTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmedTypeExtrasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
