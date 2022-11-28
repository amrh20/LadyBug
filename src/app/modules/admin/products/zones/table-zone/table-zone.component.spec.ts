import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableZoneComponent } from './table-zone.component';

describe('TableZoneComponent', () => {
  let component: TableZoneComponent;
  let fixture: ComponentFixture<TableZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
