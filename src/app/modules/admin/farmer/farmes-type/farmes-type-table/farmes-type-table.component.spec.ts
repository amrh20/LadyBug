import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmesTypeTableComponent } from './farmes-type-table.component';

describe('FarmesTypeTableComponent', () => {
  let component: FarmesTypeTableComponent;
  let fixture: ComponentFixture<FarmesTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmesTypeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmesTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
