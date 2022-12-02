import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePlantSourcesComponent } from './table-plant-sources.component';

describe('TablePlantSourcesComponent', () => {
  let component: TablePlantSourcesComponent;
  let fixture: ComponentFixture<TablePlantSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePlantSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePlantSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
