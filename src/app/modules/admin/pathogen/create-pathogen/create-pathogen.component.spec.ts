import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePathogenComponent } from './create-pathogen.component';

describe('CreatePathogenComponent', () => {
  let component: CreatePathogenComponent;
  let fixture: ComponentFixture<CreatePathogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePathogenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePathogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
