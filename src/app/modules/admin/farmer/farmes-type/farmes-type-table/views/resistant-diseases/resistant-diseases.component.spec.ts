import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistantDiseasesComponent } from './resistant-diseases.component';

describe('ResistantDiseasesComponent', () => {
  let component: ResistantDiseasesComponent;
  let fixture: ComponentFixture<ResistantDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResistantDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistantDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
