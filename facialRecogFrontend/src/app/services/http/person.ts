import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../env';
import { PersonDTOResponse } from '../../models/personDTOResponse';
import { personDTO } from '../../models/person.dto';

@Injectable({
  providedIn: 'root',
})
export class Person {
  private readonly apiUrl = `${enviroment.bdo}`;

  constructor(private http: HttpClient) {}

  getPersons(): Observable<PersonDTOResponse[]> {
    return this.http.get<PersonDTOResponse[]>(this.apiUrl);
  }

  createPerson(person: personDTO, image: File) {
    const formData = new FormData();

    formData.append('nombre', person.nombre);

    formData.append('nivelAcceso', person.nivelAcceso);

    formData.append('imagen', image);

    return this.http.post(this.apiUrl+"/crear/", formData);
  }
}
