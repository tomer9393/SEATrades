import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class TicketService 
{
  private TicketsUrl = environment.ticketsUrl;
  // private filterUrl = environment.filtersUrl;

  constructor(private http: HttpClient) {}
  
  // filter(key: string): Observable<any> 
  // {
  //   const url = `${this.filterUrl}/tickets/${key}`;
  //   return this.http.get<any>(url);
  // }

  getTickets(): Observable<any> 
  {
    return this.http.get<any>(this.TicketsUrl);
  }

  getTicketsByEventID(ticketId: String): Observable<any> 
  {
    const url = `${this.TicketsUrl}/${ticketId}`;
    return this.http.get<any>(url);
  }

  addTicket(user: String, code: String, QRcode: String, event: String, section: String, row: String, seat: String, forTrade: Boolean): Observable<any> 
  {
    return this.http.post<any>(this.TicketsUrl, { user: user, code: code, QRcode: QRcode, event: event, section: section, row: row, seat: seat, forTrade: forTrade });
  }

  getTicket(id: String): Observable<any> 
  {
    const url = `${this.TicketsUrl}/id/${id}`;
    return this.http.get<any>(url);
  }

  updateTicket(ticket: Ticket): Observable<any> 
  {
    const url = `${this.TicketsUrl}/id/${ticket._id}`;
    return this.http.patch<any>(url, { user: ticket.user, code: ticket.code, event: ticket.event, section: ticket.section, row: ticket.row, seat: ticket.seat, forTrade: ticket.forTrade });
  }

  deleteTicket(id: String): Observable<any> 
  {
    const url = `${this.TicketsUrl}/id/${id}`;
    return this.http.delete<any>(url);
  }
}
