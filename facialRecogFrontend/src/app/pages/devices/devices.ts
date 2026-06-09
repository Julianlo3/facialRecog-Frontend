import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeviceDto, DeviceSummaryDto, DeviceStatus } from '../../models/device.dto';
import { Devices as DevicesService } from '../../services/http/devices';
import { Mqtt } from '../../services/MQTT/mqtt';

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

  constructor(private devicesService: DevicesService, private mqtt: Mqtt) {}

  ngOnInit() {
    this.loadDevices();
    this.mqtt.messages$.subscribe(data => {
      console.log(data);
    })
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
      offline: 'Sin conexión',
      warning: 'Alerta',
    };

    return labels[status];
  }

  getTypeLabel(type: DeviceDto['type']): string {
    const labels: Record<DeviceDto['type'], string> = {
      pir: 'Sensor PIR',
      camera: 'Cámara',
      raspberry: 'Raspberry Pi',
      yolo: 'YOLO',
      database: 'Base de datos',
      servo: 'Servo',
      led: 'LED',
      service: 'Servicio',
      other: 'Otro',
    };

    return labels[type];
  }

  formatCurrentValue(value: DeviceDto['currentValue']): string {
    if (value === undefined || value === null || value === '') {
      return 'Sin datos';
    }

    if (typeof value === 'boolean') {
      return value ? 'Encendido' : 'Apagado';
    }

    return String(value);
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
