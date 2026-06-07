export type DeviceStatus = 'online' | 'offline' | 'warning';

export interface DeviceDto {
  id: string;
  name: string;
  type: 'pir' | 'camera' | 'raspberry' | 'yolo' | 'database' | 'other';
  status: DeviceStatus;
  location?: string;
  lastSeen?: string;
  detail?: string;
}

export interface DeviceSummaryDto {
  total: number;
  online: number;
  offline: number;
  warning: number;
}
