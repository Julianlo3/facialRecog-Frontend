import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-clock-time',
  imports: [CommonModule],
  templateUrl: './clock-time.html',
  styleUrl: './clock-time.css',
})
export class ClockTime implements OnInit, OnDestroy {
  timeNow = signal(new Date());
private intervaloId: any;

  ngOnInit(){
      this.intervaloId = setInterval(()=> {
        this.timeNow.set(new Date);
      }, 1000);
  }

  ngOnDestroy(){
    if(this.intervaloId){
      clearInterval(this.intervaloId);
    }

  }
}
