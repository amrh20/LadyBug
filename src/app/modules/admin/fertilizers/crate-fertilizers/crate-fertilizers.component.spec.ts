import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateFertilizersComponent } from './crate-fertilizers.component';

describe('CrateFertilizersComponent', () => {
  let component: CrateFertilizersComponent;
  let fixture: ComponentFixture<CrateFertilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateFertilizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateFertilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
