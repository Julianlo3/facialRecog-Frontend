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
  ];

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
