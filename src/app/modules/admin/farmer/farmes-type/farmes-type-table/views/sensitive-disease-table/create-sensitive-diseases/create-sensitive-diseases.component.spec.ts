import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSensitiveDiseasesComponent } from './create-sensitive-diseases.component';

describe('CreateSensitiveDiseasesComponent', () => {
  let component: CreateSensitiveDiseasesComponent;
  let fixture: ComponentFixture<CreateSensitiveDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSensitiveDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSensitiveDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
