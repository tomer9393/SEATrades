import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class EventService 
{
  private eventUrl = environment.eventUrl;
  private filterUrl = environment.filtersUrl;

  constructor(private http: HttpClient) {}
  
  filter(key: string): Observable<any> 
  {
    const url = `${this.filterUrl}/events/${key}`;
    return this.http.get<any>(url);
  }

  getEvents(): Observable<any> 
  {
    return this.http.get<any>(this.eventUrl);
  }

  addEvent(name: String, id: String, category: String, artist: String, imgUrl: String, date: Date, location: String ): Observable<any> 
  {
    return this.http.post<any>(this.eventUrl, { name: name, id: id, category: category, artist: artist, imgUrl: imgUrl, date: date, location:location });
  }

  getEvent(id: String): Observable<any> 
  {                              
    const url = `${this.eventUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateEvent(event: Event): Observable<any> 
  {
    const url = `${this.eventUrl}/${event.id}`;
    return this.http.patch<any>(url, { name: event.name, id: event.id, category: event.category, artist: event.artist, imgUrl: event.imgUrl, date: event.date, location: event.location });
  }

  deleteEvent(id: String): Observable<any> 
  {
    const url = `${this.eventUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  getEventsByCategory(category: String): Observable<any> 
  {
    const url = `${this.eventUrl}/${category}`;
    return this.http.get<any>(url);
  }

  getNumOfEvents(): Observable<Number> 
  {
    const url = `${this.eventUrl}/events/count`;
    return this.http.get<Number>(url);
  }
}
