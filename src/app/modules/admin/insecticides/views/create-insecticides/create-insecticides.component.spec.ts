import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsecticidesComponent } from './create-insecticides.component';

describe('CreateInsecticidesComponent', () => {
  let component: CreateInsecticidesComponent;
  let fixture: ComponentFixture<CreateInsecticidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsecticidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInsecticidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
