import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcidityTypesComponent } from './create-acidity-types.component';

describe('CreateAcidityTypesComponent', () => {
  let component: CreateAcidityTypesComponent;
  let fixture: ComponentFixture<CreateAcidityTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcidityTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcidityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
