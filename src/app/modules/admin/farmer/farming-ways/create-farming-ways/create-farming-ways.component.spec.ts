import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFarmingWaysComponent } from './create-farming-ways.component';

describe('CreateFarmingWaysComponent', () => {
  let component: CreateFarmingWaysComponent;
  let fixture: ComponentFixture<CreateFarmingWaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFarmingWaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFarmingWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
