import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsIndexComponent } from './acs-index.component';

describe('AcsIndexComponent', () => {
  let component: AcsIndexComponent;
  let fixture: ComponentFixture<AcsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
