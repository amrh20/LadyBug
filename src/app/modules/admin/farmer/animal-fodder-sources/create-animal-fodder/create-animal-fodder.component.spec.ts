import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnimalFodderComponent } from './create-animal-fodder.component';

describe('CreateAnimalFodderComponent', () => {
  let component: CreateAnimalFodderComponent;
  let fixture: ComponentFixture<CreateAnimalFodderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnimalFodderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnimalFodderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
