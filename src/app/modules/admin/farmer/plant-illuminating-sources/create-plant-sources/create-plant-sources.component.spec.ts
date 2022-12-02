import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlantSourcesComponent } from './create-plant-sources.component';

describe('CreatePlantSourcesComponent', () => {
  let component: CreatePlantSourcesComponent;
  let fixture: ComponentFixture<CreatePlantSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlantSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlantSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
