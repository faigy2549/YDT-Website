import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from '../models/Subscriber.model';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private baseUrl = 'https://localhost:7117/api/newsletter';

  constructor(private http: HttpClient) {}

  getAllCampaigns(): Observable<any> {
    return this.http.get(`${this.baseUrl}/campaigns`);
  }

  getCampaignContent(campaignId: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/campaigns/${campaignId}/html-content`, { responseType: 'text' });
  }

  addSubscriber(subscriber: Subscriber): Observable<string> {
    return this.http.post(`${this.baseUrl}/add-subscriber`, subscriber, { responseType: 'text' });
  }
  
}
