import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFertilizersComponent } from './details-fertilizers.component';

describe('DetailsFertilizersComponent', () => {
  let component: DetailsFertilizersComponent;
  let fixture: ComponentFixture<DetailsFertilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFertilizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFertilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
