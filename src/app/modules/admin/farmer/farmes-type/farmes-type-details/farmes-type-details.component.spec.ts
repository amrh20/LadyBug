import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmesTypeDetailsComponent } from './farmes-type-details.component';

describe('FarmesTypeDetailsComponent', () => {
  let component: FarmesTypeDetailsComponent;
  let fixture: ComponentFixture<FarmesTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmesTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmesTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
