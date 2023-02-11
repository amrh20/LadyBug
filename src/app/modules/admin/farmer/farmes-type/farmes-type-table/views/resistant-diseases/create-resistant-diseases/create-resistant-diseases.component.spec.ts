import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResistantDiseasesComponent } from './create-resistant-diseases.component';

describe('CreateResistantDiseasesComponent', () => {
  let component: CreateResistantDiseasesComponent;
  let fixture: ComponentFixture<CreateResistantDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateResistantDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResistantDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
