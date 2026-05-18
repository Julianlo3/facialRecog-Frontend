import { Routes } from '@angular/router';
import { StatusMQTT } from './component/status-mqtt/status-mqtt';

export const routes: Routes = [
    {path: "MQTT", component: StatusMQTT}
];
