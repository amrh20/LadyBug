import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSeedlingSourcesComponent } from './table-seedling-sources.component';

describe('TableSeedlingSourcesComponent', () => {
  let component: TableSeedlingSourcesComponent;
  let fixture: ComponentFixture<TableSeedlingSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSeedlingSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSeedlingSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
