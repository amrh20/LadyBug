import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBlockedComponent } from './type-blocked.component';

describe('TypeBlockedComponent', () => {
  let component: TypeBlockedComponent;
  let fixture: ComponentFixture<TypeBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBlockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
