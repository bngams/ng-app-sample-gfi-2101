import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/front-office/src/environments/environment';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${environment.wsUrl}/posts`);
  }
}
