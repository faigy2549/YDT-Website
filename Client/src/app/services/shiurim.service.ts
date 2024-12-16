import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Shiur } from '../models/Shiur.Model';

@Injectable({
  providedIn: 'root',
})
export class ShiurimService {
  private baseUrl = 'https://localhost:7117/api/Shiur'; 

  constructor(private httpClient: HttpClient) {}

  // BehaviorSubject to notify components when data needs to reload
  private reloadShiurimSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadShiurim$: Observable<boolean> = this.reloadShiurimSubject.asObservable();

  // Fetch all Shiurim
  getShiurim(): Observable<Shiur[]> {
    return this.httpClient.get<Shiur[]>(this.baseUrl);
  }

  // Fetch a Shiur by ID
  getShiurById(id: number): Observable<Shiur> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Shiur>(url);
  }

  // Fetch Shiurim by Length
  getShiurimByLength(minLength: string, maxLength: string): Observable<Shiur[]> {
    const url = `${this.baseUrl}/length?minLength=${minLength}&maxLength=${maxLength}`;
    return this.httpClient.get<Shiur[]>(url);
  }

  // Fetch Shiurim by Year
  getShiurimByYear(year: number): Observable<Shiur[]> {
    const url = `${this.baseUrl}/year/${year}`;
    return this.httpClient.get<Shiur[]>(url);
  }

  // Fetch Shiurim by RavId
  getShiurimByRavId(ravId: number): Observable<Shiur[]> {
    const url = `${this.baseUrl}/rav/${ravId}`;
    return this.httpClient.get<Shiur[]>(url);
  }

  // Add a new Shiur
  addShiur(shiur: Shiur): Observable<Shiur> {
    return this.httpClient.post<Shiur>(this.baseUrl, shiur);
  }

  // Update an existing Shiur
  updateShiur(id: number, shiur: Shiur): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<void>(url, shiur);
  }

  // Delete a Shiur
  deleteShiur(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  // Trigger reload of Shiurim
  triggerReload(): void {
    this.reloadShiurimSubject.next(true);
  }
}
