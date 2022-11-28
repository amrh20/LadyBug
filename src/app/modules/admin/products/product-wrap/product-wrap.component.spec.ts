import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWrapComponent } from './product-wrap.component';

describe('ProductWrapComponent', () => {
  let component: ProductWrapComponent;
  let fixture: ComponentFixture<ProductWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
