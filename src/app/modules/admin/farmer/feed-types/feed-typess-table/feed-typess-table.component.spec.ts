import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTypessTableComponent } from './feed-typess-table.component';

describe('FeedTypessTableComponent', () => {
  let component: FeedTypessTableComponent;
  let fixture: ComponentFixture<FeedTypessTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTypessTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTypessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
