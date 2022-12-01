import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataPocessComponent } from './table-data-pocess.component';

describe('TableDataPocessComponent', () => {
  let component: TableDataPocessComponent;
  let fixture: ComponentFixture<TableDataPocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDataPocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataPocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
