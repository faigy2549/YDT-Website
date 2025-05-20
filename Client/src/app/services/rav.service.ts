import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rav } from '../models/Rav.model';
import { RavDTO } from '../models/RavDTO.model';
import { local } from '../base';

@Injectable({
  providedIn: 'root',
})
export class RavService {
  private baseUrl = `${local}/Rav`;
  
  private reloadRebbeimSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadRebbeim$: Observable<boolean> = this.reloadRebbeimSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  // Get all Rebbeim
  getRebbeim(): Observable<Rav[]> {
    return this.httpClient.get<Rav[]>(this.baseUrl);
  }

  // Get Rebbe by ID
  getById(id: number): Observable<Rav> {
    return this.httpClient.get<Rav>(`${this.baseUrl}/${id}`);
  }

  // Get Rebbe by Name
  getByName(name: string): Observable<Rav> {
    return this.httpClient.get<Rav>(`${this.baseUrl}/${name}`);
  }

  // Add a new Rebbe
  add(rav: RavDTO): Observable<void> {
    return this.httpClient.post<void>(this.baseUrl, rav);
  }

  // Update a Rebbe
  update(id: number, rav: RavDTO): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${id}`, rav);
  }

  // Delete a Rebbe
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
