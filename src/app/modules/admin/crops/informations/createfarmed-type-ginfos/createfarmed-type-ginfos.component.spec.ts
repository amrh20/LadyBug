import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefarmedTypeGinfosComponent } from './createfarmed-type-ginfos.component';

describe('CreatefarmedTypeGinfosComponent', () => {
  let component: CreatefarmedTypeGinfosComponent;
  let fixture: ComponentFixture<CreatefarmedTypeGinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatefarmedTypeGinfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefarmedTypeGinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
