import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDiseasesComponent } from './index-diseases.component';

describe('IndexDiseasesComponent', () => {
  let component: IndexDiseasesComponent;
  let fixture: ComponentFixture<IndexDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
