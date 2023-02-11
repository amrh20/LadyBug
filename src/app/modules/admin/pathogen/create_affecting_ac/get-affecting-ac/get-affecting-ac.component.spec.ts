import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAffectingAcComponent } from './get-affecting-ac.component';

describe('GetAffectingAcComponent', () => {
  let component: GetAffectingAcComponent;
  let fixture: ComponentFixture<GetAffectingAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAffectingAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAffectingAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
