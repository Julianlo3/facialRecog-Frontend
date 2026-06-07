import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Devices } from './pages/devices/devices';
import { Users } from './pages/users/users';

export const routes: Routes = [
    {path: "", redirectTo: "DASHBOARD", pathMatch: "full"},
    {path: "DEVICES", component: Devices},
    {path: "DASHBOARD", component: Dashboard},
    {path: "USERS", component: Users}
];

