import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeviceDto, DeviceSummaryDto, DeviceStatus } from '../../models/device.dto';
import { Devices as DevicesService } from '../../services/devices';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devices.html',
  styleUrl: './devices.css',
})
export class Devices implements OnInit {
  devices: DeviceDto[] = [];
  summary: DeviceSummaryDto = {
    total: 0,
    online: 0,
    offline: 0,
    warning: 0,
  };
  loading = true;
  error = '';

  constructor(private devicesService: DevicesService) {}

  ngOnInit() {
    this.loadDevices();
  }

  loadDevices() {
    this.loading = true;
    this.error = '';

    this.devicesService.getDevices().subscribe({
      next: (devices) => {
        this.devices = devices;
        this.summary = this.buildSummary(devices);
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo consultar el estado de dispositivos.';
        this.loading = false;
      },
    });
  }

  getStatusLabel(status: DeviceStatus): string {
    const labels: Record<DeviceStatus, string> = {
      online: 'Activo',
      offline: 'Sin conexion',
      warning: 'Alerta',
    };

    return labels[status];
  }

  getTypeLabel(type: DeviceDto['type']): string {
    const labels: Record<DeviceDto['type'], string> = {
      pir: 'Sensor PIR',
      camera: 'Camara',
      raspberry: 'Raspberry Pi',
      yolo: 'YOLO',
      database: 'Base de datos',
      other: 'Otro',
    };

    return labels[type];
  }

  private buildSummary(devices: DeviceDto[]): DeviceSummaryDto {
    return {
      total: devices.length,
      online: devices.filter((device) => device.status === 'online').length,
      offline: devices.filter((device) => device.status === 'offline').length,
      warning: devices.filter((device) => device.status === 'warning').length,
    };
  }
}
