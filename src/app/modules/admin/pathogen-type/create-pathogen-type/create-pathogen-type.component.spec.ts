import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePathogenTypeComponent } from './create-pathogen-type.component';

describe('CreatePathogenTypeComponent', () => {
  let component: CreatePathogenTypeComponent;
  let fixture: ComponentFixture<CreatePathogenTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePathogenTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePathogenTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
