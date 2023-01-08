import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTypesIndexComponent } from './reports-types-index.component';

describe('ReportsTypesIndexComponent', () => {
  let component: ReportsTypesIndexComponent;
  let fixture: ComponentFixture<ReportsTypesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsTypesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTypesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
