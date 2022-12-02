import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFarmingWaysComponent } from './table-farming-ways.component';

describe('TableFarmingWaysComponent', () => {
  let component: TableFarmingWaysComponent;
  let fixture: ComponentFixture<TableFarmingWaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFarmingWaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFarmingWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
