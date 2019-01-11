import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReductionLabelComponent } from './reduction-label.component';

describe('ReductionLabelComponent', () => {
  let component: ReductionLabelComponent;
  let fixture: ComponentFixture<ReductionLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReductionLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReductionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
