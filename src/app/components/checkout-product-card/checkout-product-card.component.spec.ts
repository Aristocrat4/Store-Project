import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProductCardComponent } from './checkout-product-card.component';

describe('CheckoutProductCardComponent', () => {
  let component: CheckoutProductCardComponent;
  let fixture: ComponentFixture<CheckoutProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutProductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
