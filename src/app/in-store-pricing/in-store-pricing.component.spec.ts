import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InStorePricingComponent } from './in-store-pricing.component';

describe('InStorePricingComponent', () => {
  let component: InStorePricingComponent;
  let fixture: ComponentFixture<InStorePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InStorePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InStorePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
