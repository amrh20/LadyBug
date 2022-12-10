import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDatasTableComponent } from './marketing-datas-table.component';

describe('MarketingDatasTableComponent', () => {
  let component: MarketingDatasTableComponent;
  let fixture: ComponentFixture<MarketingDatasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingDatasTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingDatasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
