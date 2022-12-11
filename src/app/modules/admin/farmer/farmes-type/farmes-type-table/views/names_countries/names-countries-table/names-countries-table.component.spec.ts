import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesCountriesTableComponent } from './names-countries-table.component';

describe('NamesCountriesTableComponent', () => {
  let component: NamesCountriesTableComponent;
  let fixture: ComponentFixture<NamesCountriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesCountriesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesCountriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
