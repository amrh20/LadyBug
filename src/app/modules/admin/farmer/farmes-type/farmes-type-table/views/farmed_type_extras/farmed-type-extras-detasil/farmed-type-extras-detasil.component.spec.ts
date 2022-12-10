import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmedTypeExtrasDetasilComponent } from './farmed-type-extras-detasil.component';

describe('FarmedTypeExtrasDetasilComponent', () => {
  let component: FarmedTypeExtrasDetasilComponent;
  let fixture: ComponentFixture<FarmedTypeExtrasDetasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmedTypeExtrasDetasilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmedTypeExtrasDetasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
