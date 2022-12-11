import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFaremdComponent } from './countries-faremd.component';

describe('CountriesFaremdComponent', () => {
  let component: CountriesFaremdComponent;
  let fixture: ComponentFixture<CountriesFaremdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesFaremdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesFaremdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
