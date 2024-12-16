import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject,Observable}from 'rxjs';
import { Rav } from '../models/Rav.model';
import { RavDTO } from '../models/RavDTO.model';


@Injectable({
  providedIn: 'root'
})
export class RavService {

  constructor(private httpClient: HttpClient) { }
  private reloadRebbeimSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadRebbeim$: Observable<boolean> = this.reloadRebbeimSubject.asObservable();

  getRebbeim(): Observable<Rav[]>{
    let url = 'https://localhost:7117/api/Rav';
    return this.httpClient.get<Rav[]>(url);
   }
   GetById(id:number): Observable<Rav>{
    let url = 'https://localhost:7117/api/Rav/'+id;
    return this.httpClient.get<Rav>(url);
   }
   GetByName(name:string): Observable<Rav>{
    let url = 'https://localhost:7117/api/Rav/'+name;
    return this.httpClient.get<Rav>(url);
   }
   Add(rav:RavDTO): Observable<void>{
    let url = 'https://localhost:7117/api/Rav/';
    return this.httpClient.post<void>(url,rav);
   }
   Update(id:number,rav:RavDTO): Observable<void>{
    let url = 'https://localhost:7117/api/Rav/'+id;
    return this.httpClient.put<void>(url,rav);
   }
   Delete(id:number): Observable<void>{
    let url = 'https://localhost:7117/api/Rav/'+id;
    return this.httpClient.delete<void>(url);
   }

}
