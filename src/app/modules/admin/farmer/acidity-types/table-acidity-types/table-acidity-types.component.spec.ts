import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAcidityTypesComponent } from './table-acidity-types.component';

describe('TableAcidityTypesComponent', () => {
  let component: TableAcidityTypesComponent;
  let fixture: ComponentFixture<TableAcidityTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAcidityTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAcidityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
