import { ChangeDetectorRef, Component } from '@angular/core';
import { LogDto } from '../../models/logDto';
import mqt from 'mqtt';
import { Mqtt } from '../../services/MQTT/mqtt';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  constructor(
    private mqtt: Mqtt,
    private cdr: ChangeDetectorRef,
  ) {}

  logs: any[] = [];

  ngOnInit() {
    this.mqtt.messages$.subscribe((message) => {
      if (message.topic !== 'facialRecog/events') {
        return;
      }

      this.logs.unshift(message.payload);
      this.logs = this.logs.slice(0, 100);
      this.cdr.detectChanges();
      if (this.logs.length > 100) {
        this.logs.pop();
      }
    });
  }
}
