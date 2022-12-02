import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChemicalFertilizerSourcesComponent } from './create-chemical-fertilizer-sources.component';

describe('CreateChemicalFertilizerSourcesComponent', () => {
  let component: CreateChemicalFertilizerSourcesComponent;
  let fixture: ComponentFixture<CreateChemicalFertilizerSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChemicalFertilizerSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChemicalFertilizerSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
