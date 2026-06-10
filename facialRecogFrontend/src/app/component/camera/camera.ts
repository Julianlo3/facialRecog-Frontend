import { ChangeDetectorRef, Component } from '@angular/core';
import { enviroment } from '../../env';
import mqtt  from 'mqtt';
import { Mqtt } from '../../services/MQTT/mqtt';

@Component({
  selector: 'app-camera',
  imports: [],
  templateUrl: './camera.html',
  styleUrl: './camera.css',
})
export class Camera {


camera: string = `${enviroment.camera}`;

  captureUrl: string =
    `${enviroment.captureurl}/capture`;

  constructor(
    private mqtt: Mqtt,private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

    console.log("Tomando video en:" + this.camera)

    this.loadCapture();

    this.mqtt.messages$
      .subscribe(message => {

        if (
          message.topic ===
          'facialRecog/capture'
        ) {

          this.loadCapture();
          this.cdr.detectChanges();

        }

      });

  }

  loadCapture() {

    this.captureUrl =
      `${enviroment.captureurl}capture?t=${Date.now()}`;



  }


}
