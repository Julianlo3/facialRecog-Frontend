import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import mqtt from 'mqtt';

@Injectable({
  providedIn: 'root',
})
export class State {

  private client: any;

    public messages$ = new Subject<{
    topic: string,
    payload: any
  }>();

  constructor() {

    this.client = mqtt.connect(
      'ws://broker.hivemq.com:8000/mqtt'
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
        message: any
      ) => {

        this.messages$.next({
          topic,
          payload:
            JSON.parse(
              message.toString()
            )
        });

      }
    );
  }


}
