import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFertilizersComponent } from './delete-fertilizers.component';

describe('DeleteFertilizersComponent', () => {
  let component: DeleteFertilizersComponent;
  let fixture: ComponentFixture<DeleteFertilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFertilizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFertilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
