import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
providedIn: 'root'
})
 export class TradeService 
{
  
     private tradesUrl = environment.tradesUrl;
  
     constructor(private http: HttpClient) { }
  
     getTrades(): Observable<any> 
     {
       return this.http.get<any>(this.tradesUrl);
     }
  
     getTrade(id: string): Observable<any> 
     {
       const url = `${this.tradesUrl}/id/${id}`;
       return this.http.get<any>(url);
     }

  
     deleteTrade(id: string): Observable<any> 
     {
       const url = `${this.tradesUrl}/${id}`;
       return this.http.delete<any>(url);
     }
 }
