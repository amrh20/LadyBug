import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePathogenGrowthStageComponent } from './create-pathogen-growth-stage.component';

describe('CreatePathogenGrowthStageComponent', () => {
  let component: CreatePathogenGrowthStageComponent;
  let fixture: ComponentFixture<CreatePathogenGrowthStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePathogenGrowthStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePathogenGrowthStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
