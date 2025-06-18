import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormRequest } from '../models/ContactFormRequest.model';
import {LiveDomain} from '../base';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = `${LiveDomain}/Contact`; 
  constructor(private http: HttpClient) {}

sendContactForm(formData: ContactFormRequest): Observable<string> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.baseUrl, formData, { headers, responseType: 'text' });
}
}
