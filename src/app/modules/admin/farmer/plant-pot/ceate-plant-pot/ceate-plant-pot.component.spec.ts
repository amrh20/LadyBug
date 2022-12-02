import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeatePlantPotComponent } from './ceate-plant-pot.component';

describe('CeatePlantPotComponent', () => {
  let component: CeatePlantPotComponent;
  let fixture: ComponentFixture<CeatePlantPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeatePlantPotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeatePlantPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
