export type DeviceStatus = 'online' | 'offline' | 'warning';

export interface DeviceDto {
  id: string;
  name: string;
  type: 'pir' | 'camera' | 'raspberry' | 'database' | 'servo' | 'led' | 'service' | 'other';
  status: DeviceStatus;
  location?: string;
  lastSeen?: string;
  detail?: string;
  gpio?: number;
  currentValue?: string | boolean | number;
}

export interface DeviceSummaryDto {
  total: number;
  online: number;
  offline: number;
  warning: number;
}
