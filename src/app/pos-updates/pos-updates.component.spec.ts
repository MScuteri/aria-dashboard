import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosUpdatesComponent } from './pos-updates.component';

describe('PosUpdatesComponent', () => {
  let component: PosUpdatesComponent;
  let fixture: ComponentFixture<PosUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
