import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MazalTov } from '../models/MazalTov.model';
import { local } from '../base';

@Injectable({
  providedIn: 'root',
})
export class MazalTovService {
  private apiUrl = `${local}/mazaltov`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<MazalTov[]> {
    return this.http.get<MazalTov[]>(this.apiUrl);
  }

  getById(id: number): Observable<MazalTov> {
    return this.http.get<MazalTov>(`${this.apiUrl}/${id}`);
  }

  add(mazalTov: MazalTov): Observable<MazalTov> {
    return this.http.post<MazalTov>(this.apiUrl, mazalTov);
  }

  update(id: number, mazalTov: MazalTov): Observable<MazalTov> {
    return this.http.put<MazalTov>(`${this.apiUrl}/${id}`, mazalTov);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
