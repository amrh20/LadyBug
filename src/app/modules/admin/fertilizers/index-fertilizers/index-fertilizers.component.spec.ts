import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFertilizersComponent } from './index-fertilizers.component';

describe('IndexFertilizersComponent', () => {
  let component: IndexFertilizersComponent;
  let fixture: ComponentFixture<IndexFertilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexFertilizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFertilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
