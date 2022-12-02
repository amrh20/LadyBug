import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnimalMedicineComponent } from './create-animal-medicine.component';

describe('CreateAnimalMedicineComponent', () => {
  let component: CreateAnimalMedicineComponent;
  let fixture: ComponentFixture<CreateAnimalMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAnimalMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnimalMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
