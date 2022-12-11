import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesCountriesCreateComponent } from './names-countries-create.component';

describe('NamesCountriesCreateComponent', () => {
  let component: NamesCountriesCreateComponent;
  let fixture: ComponentFixture<NamesCountriesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesCountriesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesCountriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
