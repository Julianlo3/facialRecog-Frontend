import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../services/http/person';
import { personDTO } from '../../models/person.dto';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  showModal = signal(false);

  person: personDTO = {
    nombre: '',
    nivelAcceso: '',
    imagen: null,
  };

  searchText = '';
  selectedFilter: 'ALL' | 'ACTIVE' | 'INACTIVE' = 'ALL';


  get totalUsers(): number {
    return this.persons.length;
  }

  get activeUsers(): number {
    return this.persons.filter((p) => p.nivelAcceso === 'true').length;
  }

  get inactiveUsers(): number {
    return this.persons.filter((p) => p.nivelAcceso === 'false').length;
  }

  get filteredPersons() {
    let result = this.persons;

    if (this.selectedFilter === 'ACTIVE') {
      result = result.filter((p) => p.nivelAcceso);
    }

    if (this.selectedFilter === 'INACTIVE') {
      result = result.filter((p) => !p.nivelAcceso);
    }

    return result.filter((person) =>
      person.nombre?.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  persons: any[] = [];
  ngOnInit() {
    this.personService.getPersons().subscribe({
      next: (persons) => {
        this.persons = persons;
        console.log(this.persons);
      },

      error: (error) => {
        console.error(error);
      },
    });
  }

  previewUrl: string | null = null;

  constructor(private personService: Person) {}

  selectedFile!: File;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.selectedFile = input.files[0];

    this.previewUrl = URL.createObjectURL(this.selectedFile);
  }

  savePerson(): void {
    if (!this.selectedFile) {
      alert('Seleccione una fotografía');

      return;
    }

    this.personService.createPerson(this.person, this.selectedFile).subscribe({
      next: () => {
        alert('Usuario registrado');

        this.closeModal();
      },

      error: (error) => {
        console.error(error);
      },
    });
  }

  users: User[] = [];

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
