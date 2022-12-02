import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingMethodsTableComponent } from './farming-methods-table.component';

describe('FarmingMethodsTableComponent', () => {
  let component: FarmingMethodsTableComponent;
  let fixture: ComponentFixture<FarmingMethodsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmingMethodsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmingMethodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
