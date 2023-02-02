import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateFarmsComponent } from './rate-farms.component';

describe('RateFarmsComponent', () => {
  let component: RateFarmsComponent;
  let fixture: ComponentFixture<RateFarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateFarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
