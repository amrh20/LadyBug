import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTypessCreateComponent } from './feed-typess-create.component';

describe('FeedTypessCreateComponent', () => {
  let component: FeedTypessCreateComponent;
  let fixture: ComponentFixture<FeedTypessCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTypessCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTypessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
