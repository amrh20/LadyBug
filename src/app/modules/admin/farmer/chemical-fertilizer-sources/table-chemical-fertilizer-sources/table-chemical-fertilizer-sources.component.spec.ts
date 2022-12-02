import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChemicalFertilizerSourcesComponent } from './table-chemical-fertilizer-sources.component';

describe('TableChemicalFertilizerSourcesComponent', () => {
  let component: TableChemicalFertilizerSourcesComponent;
  let fixture: ComponentFixture<TableChemicalFertilizerSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableChemicalFertilizerSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChemicalFertilizerSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
