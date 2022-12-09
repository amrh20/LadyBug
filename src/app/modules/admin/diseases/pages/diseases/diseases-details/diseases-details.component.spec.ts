import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesDetailsComponent } from './diseases-details.component';

describe('DiseasesDetailsComponent', () => {
  let component: DiseasesDetailsComponent;
  let fixture: ComponentFixture<DiseasesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
