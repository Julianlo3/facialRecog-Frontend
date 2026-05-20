import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTime } from './clock-time';

describe('ClockTime', () => {
  let component: ClockTime;
  let fixture: ComponentFixture<ClockTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockTime],
    }).compileComponents();

    fixture = TestBed.createComponent(ClockTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
