import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPathogensComponent } from './all-pathogens.component';

describe('AllPathogensComponent', () => {
  let component: AllPathogensComponent;
  let fixture: ComponentFixture<AllPathogensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPathogensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPathogensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
