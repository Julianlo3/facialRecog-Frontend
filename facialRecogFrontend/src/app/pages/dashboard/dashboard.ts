import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ClockTime } from '../../component/clock-time/clock-time';
import { Camera } from '../../component/camera/camera';
import { Events } from "../../component/events/events";
import { ControlMQTT } from '../../component/control-mqtt/control-mqtt';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ClockTime, Camera, Events,ControlMQTT],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

protected status: string = '';

}


