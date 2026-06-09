import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DeviceDto, DeviceSummaryDto } from '../../models/device.dto';

@Injectable({
  providedIn: 'root',
})
export class Devices {
  private readonly apiUrl = 'http://localhost:8000/api/devices';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<DeviceDto[]> {
    return this.http.get<DeviceDto[]>(this.apiUrl);
  }

  getSummary(): Observable<DeviceSummaryDto> {
    return this.getDevices().pipe(
      map((devices) => ({
        total: devices.length,
        online: devices.filter((device) => device.status === 'online').length,
        offline: devices.filter((device) => device.status === 'offline').length,
        warning: devices.filter((device) => device.status === 'warning').length,
      })),
    );
  }
}
