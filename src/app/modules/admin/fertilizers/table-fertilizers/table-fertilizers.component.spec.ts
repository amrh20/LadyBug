import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFertilizersComponent } from './table-fertilizers.component';

describe('TableFertilizersComponent', () => {
  let component: TableFertilizersComponent;
  let fixture: ComponentFixture<TableFertilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFertilizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFertilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
