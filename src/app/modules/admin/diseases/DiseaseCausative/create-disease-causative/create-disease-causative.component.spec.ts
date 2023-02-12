import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiseaseCausativeComponent } from './create-disease-causative.component';

describe('CreateDiseaseCausativeComponent', () => {
  let component: CreateDiseaseCausativeComponent;
  let fixture: ComponentFixture<CreateDiseaseCausativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDiseaseCausativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiseaseCausativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
