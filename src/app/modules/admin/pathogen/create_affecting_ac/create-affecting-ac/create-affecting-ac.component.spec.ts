import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAffectingAcComponent } from './create-affecting-ac.component';

describe('CreateAffectingAcComponent', () => {
  let component: CreateAffectingAcComponent;
  let fixture: ComponentFixture<CreateAffectingAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAffectingAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAffectingAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
