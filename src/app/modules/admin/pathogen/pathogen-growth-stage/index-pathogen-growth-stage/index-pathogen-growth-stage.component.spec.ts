import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPathogenGrowthStageComponent } from './index-pathogen-growth-stage.component';

describe('IndexPathogenGrowthStageComponent', () => {
  let component: IndexPathogenGrowthStageComponent;
  let fixture: ComponentFixture<IndexPathogenGrowthStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPathogenGrowthStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPathogenGrowthStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
