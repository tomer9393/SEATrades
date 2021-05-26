import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class EventsService 
{
  private eventsUrl = environment.eventsUrl;
  // private filterUrl = environment.filtersUrl;

  constructor(private http: HttpClient) { }
  
  // filter(key: string): Observable<any> 
  // {
  //   const url = `${this.filterUrl}/events/${key}`;
  //   return this.http.get<any>(url);
  // }

  getEvents(): Observable<any> 
  {
    return this.http.get<any>(this.eventsUrl);
  }

  getNumOfEvents(): Observable<Number> 
  {
    const url = `${this.eventsUrl}/events/count`;
    return this.http.get<Number>(url);
  }

  getEventesByCategory(category: String): Observable<any> 
  {
    const url = `${this.eventsUrl}/category/${category}`;
    return this.http.get<any>(url);
  }

  addEvent(name: String, category: String, artist: String ,imgUrl: String, date: Date, location: String, minPrice: Number, totalTickets: Number): Observable<any> 
  {
    return this.http.post<any>(this.eventsUrl, { 
      name: name, 
      category: category, 
      artist: artist, 
      imgUrl: imgUrl,
      date: date,
      location: location,
      minPrice: minPrice,
      totalTickets: totalTickets });

  }

  getEvent(id: String): Observable<any> 
  {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateEvent(event: Event): Observable<any> 
  {
    const url = `${this.eventsUrl}/id/${event._id}`;
    return this.http.patch<any>(url, { 
      name: event.name, 
      category: event.category, 
      artist: event.artist,
      imgUrl: event.imgUrl,
      date: event.date,
      location: event.location,
      tickets: event.tickets });
  }

  deleteEvent(id: String): Observable<any> 
  {
    const url = `${this.eventsUrl}/id/${id}`;
    return this.http.delete<any>(url);
  }
}