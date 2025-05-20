import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormRequest } from '../models/ContactFormRequest.model';
import { local } from '../base';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = `${local}/Contact`; 
  constructor(private http: HttpClient) {}

  sendContactForm(formData: ContactFormRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl, formData, { headers });
  }
}
