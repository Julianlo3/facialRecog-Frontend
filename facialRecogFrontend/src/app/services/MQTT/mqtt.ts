import { Injectable } from '@angular/core';
import mqtt from 'mqtt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mqtt {

  private client: any;

  public messages$ = new Subject<{
    topic: string;
    payload: any;
  }>();

  constructor() {

    this.client = mqtt.connect(
      'ws://192.168.1.66:9001'
    );

    this.client.on('connect', () => {

      console.log('MQTT conectado');

      this.client.subscribe(
        'facialRecog/state'
      );

    });

    this.client.on(
      'message',
      (
        topic: string,
        message: Buffer
      ) => {

        try {

          const payload =
            JSON.parse(
              message.toString()
            );

          this.messages$.next({
            topic,
            payload
          });

        } catch {

          this.messages$.next({
            topic,
            payload:
              message.toString()
          });

        }

      }
    );
  }

}
