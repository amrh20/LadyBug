import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWrapFarmerComponent } from './index-wrap-farmer.component';

describe('IndexWrapFarmerComponent', () => {
  let component: IndexWrapFarmerComponent;
  let fixture: ComponentFixture<IndexWrapFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexWrapFarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexWrapFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
