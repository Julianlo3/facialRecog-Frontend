import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personDTO } from '../../models/person.dto';

@Injectable({
  providedIn: 'root',
})
export class Person {
  private readonly apiUrl = 'http://192.168.1.66:8000/api/person';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<personDTO[]> {
    return this.http.get<personDTO[]>(this.apiUrl);
  }

  createPerson(person: personDTO, photo: File): Observable<any> {
    const formData = new FormData();

    formData.append('name', person.name);

    formData.append('access', String(person.access));

    formData.append('photo', photo);

    return this.http.post(this.apiUrl, formData);
  }
}
