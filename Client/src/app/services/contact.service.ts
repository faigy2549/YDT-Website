import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormRequest } from '../models/ContactFormRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://localhost:7117/api/Contact';
  constructor(private http: HttpClient) {}

  sendContactForm(formData: ContactFormRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl, formData, { headers });
  }
}
