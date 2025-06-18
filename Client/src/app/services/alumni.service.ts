import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumni } from '../models/Alumni.model';
import {LiveDomain} from '../base';


@Injectable({
  providedIn: 'root',
})
export class AlumniService {
  private apiUrl = `${LiveDomain}/alumni`; 
  constructor(private http: HttpClient) {}

  getAll(): Observable<Alumni[]> {
    return this.http.get<Alumni[]>(this.apiUrl);
  }

  getById(id: number): Observable<Alumni> {
    return this.http.get<Alumni>(`${this.apiUrl}/${id}`);
  }

  add(alumni: Alumni): Observable<Alumni> {
    return this.http.post<Alumni>(this.apiUrl, alumni);
  }

  update(id: number, alumni: Alumni): Observable<Alumni> {
    return this.http.put<Alumni>(`${this.apiUrl}/${id}`, alumni);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
