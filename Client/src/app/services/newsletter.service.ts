import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Subscriber } from '../models/Subscriber.model';
import { local } from '../base';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private baseUrl = `${local}/newsletter`;
  private campaignCache: any = null; // in-memory cache

  constructor(private http: HttpClient) {}

  getAllCampaigns(): Observable<any> {
    if (this.campaignCache) {
      return of(this.campaignCache); 
    }

    return this.http.get(`${this.baseUrl}/campaigns`).pipe(
      tap((data) => {
        this.campaignCache = data; 
      })
    );
  }

  getCampaignContent(campaignId: string): Observable<string> {
    return this.http.get(`${this.baseUrl}/campaigns/${campaignId}/html-content`, { responseType: 'text' });
  }

  addSubscriber(subscriber: Subscriber): Observable<string> {
    return this.http.post(`${this.baseUrl}/add-subscriber`, subscriber, { responseType: 'text' });
  }
  
}
