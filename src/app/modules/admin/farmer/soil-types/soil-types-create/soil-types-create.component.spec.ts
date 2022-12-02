import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilTypesCreateComponent } from './soil-types-create.component';

describe('SoilTypesCreateComponent', () => {
  let component: SoilTypesCreateComponent;
  let fixture: ComponentFixture<SoilTypesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilTypesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilTypesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
