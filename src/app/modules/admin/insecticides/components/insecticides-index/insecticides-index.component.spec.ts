import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecticidesIndexComponent } from './insecticides-index.component';

describe('InsecticidesIndexComponent', () => {
  let component: InsecticidesIndexComponent;
  let fixture: ComponentFixture<InsecticidesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsecticidesIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsecticidesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
