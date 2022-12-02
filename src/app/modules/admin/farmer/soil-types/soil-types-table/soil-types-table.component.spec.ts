import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilTypesTableComponent } from './soil-types-table.component';

describe('SoilTypesTableComponent', () => {
  let component: SoilTypesTableComponent;
  let fixture: ComponentFixture<SoilTypesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilTypesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilTypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
