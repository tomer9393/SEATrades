import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
    private usersUrl = environment.usersUrl;
    private filterUrl = environment.filtersUrl;
  
    constructor(private http: HttpClient) { }
    
    filter(key: string): Observable<any> 
    {
      const url = `${this.filterUrl}/users/${key}`;
      return this.http.get<any>(url);
    }
  
    getUsers(): Observable<any> 
    {
      return this.http.get<any>(this.usersUrl);
    }

    getNumOfUsers(): Observable<Number> 
    {
      const url = `${this.usersUrl}/countUsers`;
      return this.http.get<Number>(url);
    }
   
  
    //add tickets: moongose.Schema.Types.ObjectId
    addUser(email: string, password: string, admin: boolean, firstName: string, lastName: string, phoneNumber: string): Observable<any> 
    {
      return this.http.post<any>(this.usersUrl, { 
        email: email,
        password: password, 
        admin: admin,
        firstName: firstName, 
        lastName: lastName, 
        phoneNumber: phoneNumber,
        //ticket: tickets
       
      });
  
    }
  
    getUserByid(id: string): Observable<any> 
    {
      const url = `${this.usersUrl}/getUserById/${id}`;
      return this.http.get<any>(url);
    }

    getUserByEmail(email: string): Observable<any> 
    {
      const url = `${this.usersUrl}/getUserByEmail/${email}`;
      return this.http.get<any>(url);
    }
  
    updateUser(user: User): Observable<any> {
      const url = `${this.usersUrl}/${user.id}`;
      return this.http.patch<any>(url, { 
        email: user.email, 
        password: user.password, 
        admin: user.admin,
        firstName: user.firstname, 
        lastname: user.lastname, 
        phoneNumber: user.phoneNumber
        //tickets:  
      });
    }
  
    deleteUser(id: string): Observable<any> 
    {
      const url = `${this.usersUrl}/${id}`;
      return this.http.delete<any>(url);
    }
}
