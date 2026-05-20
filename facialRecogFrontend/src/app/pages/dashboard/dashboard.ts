import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ClockTime } from '../../component/clock-time/clock-time';
import { Camera } from '../../component/camera/camera';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,ClockTime,Camera],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

protected status: string = '';

}


