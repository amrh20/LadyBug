import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInsecticidesComponent } from './table-insecticides.component';

describe('TableInsecticidesComponent', () => {
  let component: TableInsecticidesComponent;
  let fixture: ComponentFixture<TableInsecticidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInsecticidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInsecticidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
