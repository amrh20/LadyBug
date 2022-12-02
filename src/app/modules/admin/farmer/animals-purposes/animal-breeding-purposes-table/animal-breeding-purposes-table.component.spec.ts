import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBreedingPurposesTableComponent } from './animal-breeding-purposes-table.component';

describe('AnimalBreedingPurposesTableComponent', () => {
  let component: AnimalBreedingPurposesTableComponent;
  let fixture: ComponentFixture<AnimalBreedingPurposesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalBreedingPurposesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalBreedingPurposesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
