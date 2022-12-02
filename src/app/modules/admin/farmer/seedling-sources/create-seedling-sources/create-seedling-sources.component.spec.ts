import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeedlingSourcesComponent } from './create-seedling-sources.component';

describe('CreateSeedlingSourcesComponent', () => {
  let component: CreateSeedlingSourcesComponent;
  let fixture: ComponentFixture<CreateSeedlingSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSeedlingSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeedlingSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
