import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInsecticidesComponent } from './details-insecticides.component';

describe('DetailsInsecticidesComponent', () => {
  let component: DetailsInsecticidesComponent;
  let fixture: ComponentFixture<DetailsInsecticidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInsecticidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsInsecticidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
