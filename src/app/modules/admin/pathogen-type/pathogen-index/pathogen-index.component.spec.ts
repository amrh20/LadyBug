import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathogenIndexComponent } from './pathogen-index.component';

describe('PathogenIndexComponent', () => {
  let component: PathogenIndexComponent;
  let fixture: ComponentFixture<PathogenIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathogenIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathogenIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
