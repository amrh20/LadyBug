import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnimalFodderComponent } from './table-animal-fodder.component';

describe('TableAnimalFodderComponent', () => {
  let component: TableAnimalFodderComponent;
  let fixture: ComponentFixture<TableAnimalFodderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnimalFodderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnimalFodderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
