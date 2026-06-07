import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  role: string;
  dept: string;
  access: 'ACCESO TOTAL' | 'RESTRINGIDO' | 'VISITANTE';
  active: boolean;
  time: string;
  avatar: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  showModal = signal(false);

  users: User[] = [
    {
      name: 'Valentina Reyes',
      role: 'Desarrolladora Senior',
      dept: 'Ingeniería',
      access: 'ACCESO TOTAL',
      active: true,
      time: 'Hoy, 08:47',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      name: 'Carlos Mendoza',
      role: 'Gerente de Infraestructura',
      dept: 'Operaciones',
      access: 'ACCESO TOTAL',
      active: true,
      time: 'Hoy, 09:03',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    {
      name: 'Sofía Torres',
      role: 'Científica de Datos',
      dept: 'Investigación',
      access: 'RESTRINGIDO',
      active: true,
      time: 'Hoy, 09:17',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
    {
      name: 'Miguel Ángel Fuentes',
      role: 'Director General',
      dept: 'Dirección',
      access: 'ACCESO TOTAL',
      active: true,
      time: 'Hoy, 09:45',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    {
      name: 'Isabella Navarro',
      role: 'Investigadora',
      dept: 'Investigación',
      access: 'RESTRINGIDO',
      active: true,
      time: 'Hoy, 10:02',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    },
    {
      name: 'Ana Lucía Vega',
      role: 'Coordinadora RRHH',
      dept: 'RRHH',
      access: 'RESTRINGIDO',
      active: true,
      time: 'Hoy, 10:34',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
    {
      name: 'Diego Ramírez',
      role: 'Analista de Seguridad',
      dept: 'Seguridad',
      access: 'ACCESO TOTAL',
      active: false,
      time: 'Ayer, 17:22',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
    },
    {
      name: 'Luciano Herrera',
      role: 'Directora de Marca',
      dept: 'Marketing',
      access: 'VISITANTE',
      active: true,
      time: '14 May, 11:08',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    },
  ];

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
