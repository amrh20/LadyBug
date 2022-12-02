import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnimalMedicineComponent } from './table-animal-medicine.component';

describe('TableAnimalMedicineComponent', () => {
  let component: TableAnimalMedicineComponent;
  let fixture: ComponentFixture<TableAnimalMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnimalMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnimalMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
