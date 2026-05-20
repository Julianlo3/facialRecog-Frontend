import { Injectable } from '@angular/core';
import mqtt from 'mqtt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Mqtt {
  client: any;
  mensajeRecibido = new Subject<any>();

  constructor() {
    this.client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt');

    this.client.on('connect', () => {
      console.log('Conectado MQTT');

      this.client.subscribe('facialRecog/leds');
      this.client.subscribe('facialRecog/leds/status/verde');
      this.client.subscribe('facialRecog/leds/status/rojo');
    });

    this.client.on('message', (topic: string, message: any) => {
      const data = {
        topic: topic,
        message: message.toString(),
      };

      this.mensajeRecibido.next(data);

      console.log('Mensaje recibido:', topic.toString(), message.toString());
    });
  }

  suscribeUrl(url: string){
    this.client.suscribe(url);
  }

  publishMessage(topic: string, message: string) {
    this.client.publish(topic, message);
  }
}
