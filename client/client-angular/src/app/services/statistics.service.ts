import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistic } from '../models/statistic';
import { environment } from '../../environments/environment';
//import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatisticsService 
{

    adminGraphUrl : 'http://localhost:8081/adminGraph';

  constructor(private http: HttpClient) { }

  
  getEventsStatistic(): Observable<any> 
  {
    const url = `${this.adminGraphUrl}/sumOfEventsByCategory`;
    return this.http.get<any>(url);
  }
  getTicketsStatistic(): Observable<any>
  {
    const url = `${this.adminGraphUrl}/soldTicketsByEvent`;
    return this.http.get<any>(url);
  }
}
