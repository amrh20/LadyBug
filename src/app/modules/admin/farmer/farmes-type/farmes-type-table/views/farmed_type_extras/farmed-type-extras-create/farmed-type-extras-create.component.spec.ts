import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmedTypeExtrasCreateComponent } from './farmed-type-extras-create.component';

describe('FarmedTypeExtrasCreateComponent', () => {
  let component: FarmedTypeExtrasCreateComponent;
  let fixture: ComponentFixture<FarmedTypeExtrasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmedTypeExtrasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmedTypeExtrasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
