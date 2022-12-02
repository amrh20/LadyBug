import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesSaltsTableComponent } from './types-salts-table.component';

describe('TypesSaltsTableComponent', () => {
  let component: TypesSaltsTableComponent;
  let fixture: ComponentFixture<TypesSaltsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesSaltsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesSaltsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
