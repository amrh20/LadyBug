import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBloackedDetailsComponent } from './post-bloacked-details.component';

describe('PostBloackedDetailsComponent', () => {
  let component: PostBloackedDetailsComponent;
  let fixture: ComponentFixture<PostBloackedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBloackedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBloackedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
