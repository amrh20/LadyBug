import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomiesDetailsComponent } from './taxonomies-details.component';

describe('TaxonomiesDetailsComponent', () => {
  let component: TaxonomiesDetailsComponent;
  let fixture: ComponentFixture<TaxonomiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxonomiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
