import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Topic } from '../models/Topic.model';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private baseUrl = 'https://localhost:7117/api/Topic'; // Base URL for the API

  constructor(private httpClient: HttpClient) {}

  // BehaviorSubject to notify components when data needs to reload
  private reloadTopicsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadTopics$: Observable<boolean> = this.reloadTopicsSubject.asObservable();

  // Fetch all topics
  getTopics(): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.baseUrl);
  }

  // Fetch a topic by ID
  getTopicById(id: number): Observable<Topic> {
    const url = `${this.baseUrl}/`+id;
    return this.httpClient.get<Topic>(url);
  }

  // Add a new topic
  addTopic(topic: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>(this.baseUrl, topic);
  }

  // Update an existing topic
  updateTopic(id: number, topic: Topic): Observable<void> {
    const url = `${this.baseUrl}/`+id;
    return this.httpClient.put<void>(url, topic);
  }

  // Delete a topic by ID
  deleteTopic(id: number): Observable<void> {
    const url = `${this.baseUrl}/`+id;
    return this.httpClient.delete<void>(url);
  }

  // Trigger reload of topics
  triggerReload(): void {
    this.reloadTopicsSubject.next(true);
  }
}
