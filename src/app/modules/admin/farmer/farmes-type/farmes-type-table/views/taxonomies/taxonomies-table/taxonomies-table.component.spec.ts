import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomiesTableComponent } from './taxonomies-table.component';

describe('TaxonomiesTableComponent', () => {
  let component: TaxonomiesTableComponent;
  let fixture: ComponentFixture<TaxonomiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxonomiesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
