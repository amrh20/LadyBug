import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesCreateComponent } from './diseases-create.component';

describe('DiseasesCreateComponent', () => {
  let component: DiseasesCreateComponent;
  let fixture: ComponentFixture<DiseasesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
