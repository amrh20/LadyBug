import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrpaIndexComponent } from './wrpa-index.component';

describe('WrpaIndexComponent', () => {
  let component: WrpaIndexComponent;
  let fixture: ComponentFixture<WrpaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrpaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrpaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
