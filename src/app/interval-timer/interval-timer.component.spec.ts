import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalTimerComponent } from './interval-timer.component';

describe('IntervalTimerComponent', () => {
  let component: IntervalTimerComponent;
  let fixture: ComponentFixture<IntervalTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalTimerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
