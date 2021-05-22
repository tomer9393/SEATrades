import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AdminUser } from '../models/admin-user';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService 
{
  
    private usersAdminUrl = environment.usersAdminUrl;
    // private filterUrl = environment.filtersUrl;
  
    constructor(private http: HttpClient) { }
    
    // filter(key: string): Observable<any> 
    // {
    //   const url = `${this.filterUrl}/users/${key}`;
    //   return this.http.get<any>(url);
    // }
  
    getAdminUsers(): Observable<any> 
    {
      return this.http.get<any>(this.usersAdminUrl);
    }
  
    addAdminUser(email: string, password: string, isAdmin: boolean, firstname: string, lastname: string ,phone: string): Observable<any> {
      return this.http.post<any>(this.usersAdminUrl, { 
        email: email, 
        firstname: firstname, 
        lastname: lastname, 
        password: password, 
        phone: phone,
        isAdmin: isAdmin, 
      });
  
    }
  
    getAdminUser(id: string): Observable<any> 
    {
      const url = `${this.usersAdminUrl}/id/${id}`;
      return this.http.get<any>(url);
    }
  
    updateAdminUser(adminUser: AdminUser): Observable<any> 
    {
      const url = `${this.usersAdminUrl}/id/${adminUser._id}`;
      return this.http.patch<any>(url, { 
        email: adminUser.email, 
        firstname: adminUser.firstname, 
        lastname: adminUser.lastname, 
        password: adminUser.password, 
        phone: adminUser.phone,
        isAdmin: adminUser.isAdmin });
    }
  
    deleteAdminUser(id: string): Observable<any> 
    {
      const url = `${this.usersAdminUrl}/id/${id}`;
      return this.http.delete<any>(url);
    }
}
