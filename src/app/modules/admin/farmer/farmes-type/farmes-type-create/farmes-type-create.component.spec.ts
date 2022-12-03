import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmesTypeCreateComponent } from './farmes-type-create.component';

describe('FarmesTypeCreateComponent', () => {
  let component: FarmesTypeCreateComponent;
  let fixture: ComponentFixture<FarmesTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmesTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmesTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
