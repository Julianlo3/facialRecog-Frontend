import { Component } from '@angular/core';
import { Mqtt } from '../../services/MQTT/mqtt';


@Component({
  selector: 'app-control-mqtt',
  imports: [],
  templateUrl: './control-mqtt.html',
  styleUrl: './control-mqtt.css',
})
export class ControlMQTT {

  constructor(private mqtt: Mqtt){

  }

  controlDevice(
    device: string,
    action: string
  ) {

    this.mqtt.publish(
      'facialRecog/control',
      {
        device,
        action
      }
    );

  }

}
