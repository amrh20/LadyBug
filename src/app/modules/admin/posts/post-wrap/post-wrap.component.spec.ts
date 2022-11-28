import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWrapComponent } from './post-wrap.component';

describe('PostWrapComponent', () => {
  let component: PostWrapComponent;
  let fixture: ComponentFixture<PostWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostWrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
