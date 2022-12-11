import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCreateComponent } from './countries-create.component';

describe('CountriesCreateComponent', () => {
  let component: CountriesCreateComponent;
  let fixture: ComponentFixture<CountriesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
