import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsDetailsComponent } from './acs-details.component';

describe('AcsDetailsComponent', () => {
  let component: AcsDetailsComponent;
  let fixture: ComponentFixture<AcsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
