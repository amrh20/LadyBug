import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesSaltsCreateComponent } from './types-salts-create.component';

describe('TypesSaltsCreateComponent', () => {
  let component: TypesSaltsCreateComponent;
  let fixture: ComponentFixture<TypesSaltsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesSaltsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesSaltsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
