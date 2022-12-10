import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDatasCreateComponent } from './marketing-datas-create.component';

describe('MarketingDatasCreateComponent', () => {
  let component: MarketingDatasCreateComponent;
  let fixture: ComponentFixture<MarketingDatasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingDatasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingDatasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
