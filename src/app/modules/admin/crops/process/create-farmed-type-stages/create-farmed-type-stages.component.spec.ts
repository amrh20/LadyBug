import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFarmedTypeStagesComponent } from './create-farmed-type-stages.component';

describe('CreateFarmedTypeStagesComponent', () => {
  let component: CreateFarmedTypeStagesComponent;
  let fixture: ComponentFixture<CreateFarmedTypeStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFarmedTypeStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFarmedTypeStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
