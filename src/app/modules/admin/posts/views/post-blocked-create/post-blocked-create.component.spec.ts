import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBlockedCreateComponent } from './post-blocked-create.component';

describe('PostBlockedCreateComponent', () => {
  let component: PostBlockedCreateComponent;
  let fixture: ComponentFixture<PostBlockedCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBlockedCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBlockedCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
