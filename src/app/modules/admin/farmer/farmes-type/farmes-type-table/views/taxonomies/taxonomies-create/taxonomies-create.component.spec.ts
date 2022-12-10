import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomiesCreateComponent } from './taxonomies-create.component';

describe('TaxonomiesCreateComponent', () => {
  let component: TaxonomiesCreateComponent;
  let fixture: ComponentFixture<TaxonomiesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxonomiesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonomiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
