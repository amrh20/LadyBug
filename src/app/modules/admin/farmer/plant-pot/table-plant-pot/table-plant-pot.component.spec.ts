import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlantPotComponent } from './table-plant-pot.component';

describe('TablePlantPotComponent', () => {
  let component: TablePlantPotComponent;
  let fixture: ComponentFixture<TablePlantPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlantPotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlantPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
