import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTypeCreateComponent } from './post-type-create.component';

describe('PostTypeCreateComponent', () => {
  let component: PostTypeCreateComponent;
  let fixture: ComponentFixture<PostTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
