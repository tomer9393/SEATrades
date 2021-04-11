import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  getTicketsByEventID(eventId: String) 
  {
    const url = `${this.ticketsUrl}/${eventId}`;
    return this.http.get<any>(url);
  }
  private ticketsUrl = environment.ticketsUrl;
  private filterUrl = environment.filtersUrl;

  constructor(private http: HttpClient) { }
  
  filter(key: string): Observable<any> 
  {
    const url = `${this.filterUrl}/tickets/${key}`;
    return this.http.get<any>(url);
  }

  getTickets(): Observable<any>
  {
    return this.http.get<any>(this.ticketsUrl);
  }

  getNumOfTickets(): Observable<Number> {
    const url = `${this.ticketsUrl}/tickets/count`;
    return this.http.get<Number>(url);
  }

  getTicketsByCategory(category: String): Observable<any> 
  {
    const url = `${this.ticketsUrl}/${category}`;
    return this.http.get<any>(url);
  }

  addTickets(user: String, code: String, QRcode: String, event: String, section: String, row: String, seat:String, forTrade: Boolean): Observable<any>
  {
    return this.http.post<any>(this.ticketsUrl, { 
      user: user, 
      code: code, 
      QRcode: QRcode, 
      event: event, 
      section: section,
      row: row,
      seat: seat,
      forTrade: forTrade });
  }

  getTicket(id: String): Observable<any> 
  {
    const url = `${this.ticketsUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateTicket(ticket: Ticket): Observable<any> {
    const url = `${this.ticketsUrl}/QRcode/${ticket.QRcode}`; //  אולי לפי id ?
    return this.http.patch<any>(url, { 
      //user: ticket.user, 
      code: ticket.code, 
      QRcode: ticket.QRcode, 
      //event: ticket.event, 
      section: ticket.section,
      row: ticket.row,
      seat: ticket.seat,
      forTrade: ticket.forTrade });
  }

  deleteTickets(QRcode: String): Observable<any> 
  {
    const url = `${this.ticketsUrl}/QRcode/${QRcode}`;
    return this.http.delete<any>(url);
  }

  getTicketsByUserId(userId: String): Observable<any> 
  {
    const url = `${this.ticketsUrl}/user/${userId}`;
    return this.http.get<any>(url);
  }
}