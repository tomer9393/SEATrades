import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTradeComponent } from './details-trade.component';

describe('DetailsTradeComponent', () => {
  let component: DetailsTradeComponent;
  let fixture: ComponentFixture<DetailsTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
