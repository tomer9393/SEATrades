import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Ticket } from '../models/ticket';

@Injectable({
providedIn: 'root'
})
 export class UsersService 
{
  
     private usersUrl = environment.usersUrl;
  
     constructor(private http: HttpClient) { }
  
     getUsers(): Observable<any> 
     {
       return this.http.get<any>(this.usersUrl);
     }
  
     getUser(id: string): Observable<any> 
     {
       const url = `${this.usersUrl}/id/${id}`;
       return this.http.get<any>(url);
     }

  
     deleteUser(id: string): Observable<any> 
     {
       const url = `${this.usersUrl}/id/${id}`;
       return this.http.delete<any>(url);
     }
 }
