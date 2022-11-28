import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBlockedCreateComponent } from './type-blocked-create.component';

describe('TypeBlockedCreateComponent', () => {
  let component: TypeBlockedCreateComponent;
  let fixture: ComponentFixture<TypeBlockedCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBlockedCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBlockedCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
