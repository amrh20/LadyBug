import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathogenGrowthStageComponent } from './pathogen-growth-stage.component';

describe('PathogenGrowthStageComponent', () => {
  let component: PathogenGrowthStageComponent;
  let fixture: ComponentFixture<PathogenGrowthStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathogenGrowthStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathogenGrowthStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
