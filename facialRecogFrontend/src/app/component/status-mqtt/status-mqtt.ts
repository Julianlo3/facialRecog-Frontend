import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mqtt } from '../../services/mqtt';
import { Card } from '../card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-mqtt',
  imports: [FormsModule,Card,CommonModule],
  templateUrl: './status-mqtt.html',
  styleUrl: './status-mqtt.css',
})

export class StatusMQTT implements OnInit {

  ngOnInit(){
    this.mqtt.mensajeRecibido.subscribe((data)=> {
      console.log("Entre a enviar")
      const card = this.cards.find(
        c => c.topic === data.topic
      );

      if(card){
        console.log("Encontré la carta");
        card.value = data.message;
        this.cdr.detectChanges();
      }
    })
  }

  protected inputLed: string = '';
  statusLedRojo: string = '';
  statusLedVerde: string = '';
  mqttUrl: string = '';
  mqttUrlName: string = '';
  mqttUrls: [] = [];
  cards = [ {topic:"",name:"",value:""}];
  mqttValue: string = '';

  constructor(private mqtt: Mqtt,private cdr: ChangeDetectorRef){}

  sendInputLeds(){
  console.log("Activando MQTT");
  this.mqtt.publishMessage("facialRecog/leds",this.inputLed);
  }

  registerUrlMqtt(){
    this.cards.push({
      topic: this.mqttUrl,
      name: this.mqttUrlName,
      value: "sin datos"
    });
  }
}


