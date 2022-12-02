import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingMethodsCreateComponent } from './farming-methods-create.component';

describe('FarmingMethodsCreateComponent', () => {
  let component: FarmingMethodsCreateComponent;
  let fixture: ComponentFixture<FarmingMethodsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmingMethodsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmingMethodsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
