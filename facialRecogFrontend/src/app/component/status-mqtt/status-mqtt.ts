import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mqtt } from '../../services/mqtt';

@Component({
  selector: 'app-status-mqtt',
  imports: [FormsModule],
  templateUrl: './status-mqtt.html',
  styleUrl: './status-mqtt.css',
})

export class StatusMQTT {

  ngOnInit(){
    this.mqtt.mensajeRecibido.subscribe((data)=> {
      this.recibeInputLeds(data.topic,data.message);
    })
  }

  protected inputLed: string = '';
  statusLedRojo: string = '';
  statusLedVerde: string = '';

  constructor(private mqtt: Mqtt){}

  sendInputLeds(){
  console.log("Activando MQTT");
  this.mqtt.publishMessage("facialRecog/leds",this.inputLed);
  }

  recibeInputLeds(topic: string, status: string){
    if(topic==="facialRecog/leds/status/verde"){
      this.statusLedVerde = status;
    }
    if(topic==="facialRecog/leds/status/rojo"){
      this.statusLedRojo = status;
    }

  }
}


