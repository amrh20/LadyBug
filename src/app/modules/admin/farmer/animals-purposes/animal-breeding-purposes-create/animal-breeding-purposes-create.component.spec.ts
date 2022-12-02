import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBreedingPurposesCreateComponent } from './animal-breeding-purposes-create.component';

describe('AnimalBreedingPurposesCreateComponent', () => {
  let component: AnimalBreedingPurposesCreateComponent;
  let fixture: ComponentFixture<AnimalBreedingPurposesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalBreedingPurposesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalBreedingPurposesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
