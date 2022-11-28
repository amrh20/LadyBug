import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBlockedComponent } from './post-blocked.component';

describe('PostBlockedComponent', () => {
  let component: PostBlockedComponent;
  let fixture: ComponentFixture<PostBlockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBlockedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBlockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
