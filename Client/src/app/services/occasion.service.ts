import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Occasion } from '../models/Occasion.model';


@Injectable({
  providedIn: 'root',
})
export class OccasionService {
  private apiUrl = 'https://localhost:7117/api/occasion'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<Occasion[]> {
    return this.http.get<Occasion[]>(this.apiUrl);
  }

  getById(id: number): Observable<Occasion> {
    return this.http.get<Occasion>(`${this.apiUrl}/${id}`);
  }

  add(occasion: Occasion): Observable<Occasion> {
    return this.http.post<Occasion>(this.apiUrl, occasion);
  }

  update(id: number, occasion: Occasion): Observable<Occasion> {
    return this.http.put<Occasion>(`${this.apiUrl}/${id}`, occasion);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
