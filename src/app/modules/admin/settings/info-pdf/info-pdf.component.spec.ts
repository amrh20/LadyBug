import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPdfComponent } from './info-pdf.component';

describe('InfoPdfComponent', () => {
  let component: InfoPdfComponent;
  let fixture: ComponentFixture<InfoPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
