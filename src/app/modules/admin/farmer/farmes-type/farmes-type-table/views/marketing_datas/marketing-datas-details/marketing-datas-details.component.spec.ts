import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDatasDetailsComponent } from './marketing-datas-details.component';

describe('MarketingDatasDetailsComponent', () => {
  let component: MarketingDatasDetailsComponent;
  let fixture: ComponentFixture<MarketingDatasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingDatasDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingDatasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
