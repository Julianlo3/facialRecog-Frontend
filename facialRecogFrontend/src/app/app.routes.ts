import { Routes } from '@angular/router';
import { StatusMQTT } from './component/status-mqtt/status-mqtt';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {path: "MQTT", component: StatusMQTT},
    {path: "DASHBOARD", component: Dashboard}
];
