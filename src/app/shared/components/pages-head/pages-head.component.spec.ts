import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesHeadComponent } from './pages-head.component';

describe('PagesHeadComponent', () => {
  let component: PagesHeadComponent;
  let fixture: ComponentFixture<PagesHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
