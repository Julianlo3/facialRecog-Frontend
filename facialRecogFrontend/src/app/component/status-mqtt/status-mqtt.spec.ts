import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMQTT } from './status-mqtt';

describe('StatusMQTT', () => {
  let component: StatusMQTT;
  let fixture: ComponentFixture<StatusMQTT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusMQTT],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusMQTT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
