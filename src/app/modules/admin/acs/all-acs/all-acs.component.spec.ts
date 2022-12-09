import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcsComponent } from './all-acs.component';

describe('AllAcsComponent', () => {
  let component: AllAcsComponent;
  let fixture: ComponentFixture<AllAcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
