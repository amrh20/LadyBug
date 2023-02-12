import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseCausativeComponent } from './disease-causative.component';

describe('DiseaseCausativeComponent', () => {
  let component: DiseaseCausativeComponent;
  let fixture: ComponentFixture<DiseaseCausativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseCausativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseCausativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
