import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStocksComponent } from './out-of-stocks.component';

describe('OutOfStocksComponent', () => {
  let component: OutOfStocksComponent;
  let fixture: ComponentFixture<OutOfStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
