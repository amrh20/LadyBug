import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPathogenTypesComponent } from './all-pathogen-types.component';

describe('AllPathogenTypesComponent', () => {
  let component: AllPathogenTypesComponent;
  let fixture: ComponentFixture<AllPathogenTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPathogenTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPathogenTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
