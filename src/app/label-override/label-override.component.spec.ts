import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOverrideComponent } from './label-override.component';

describe('LabelOverrideComponent', () => {
  let component: LabelOverrideComponent;
  let fixture: ComponentFixture<LabelOverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelOverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
