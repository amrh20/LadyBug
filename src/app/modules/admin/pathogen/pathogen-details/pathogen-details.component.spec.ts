import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathogenDetailsComponent } from './pathogen-details.component';

describe('PathogenDetailsComponent', () => {
  let component: PathogenDetailsComponent;
  let fixture: ComponentFixture<PathogenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathogenDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathogenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
