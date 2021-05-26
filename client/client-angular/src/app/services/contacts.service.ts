import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  private contactsUrl = environment.contactsUrl;
  // private filterUrl = environment.filtersUrl;

  constructor(private http: HttpClient) {}
  
  // filter(key: string): Observable<any> {
  //   const url = `${this.filterUrl}/contacts/${key}`;
  //   return this.http.get<any>(url);
  // }

  getContacts(): Observable<any> 
  {
    return this.http.get<any>(this.contactsUrl);
  }

  addContact(firstName: String, lastName: String, email: String, phone: String, message: String): Observable<any> 
  {
    return this.http.post<any>(this.contactsUrl, { firstName: firstName, lastName: lastName, email: email, phone: phone, message: message });
  }

  getContact(id: String): Observable<any> 
  {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateContact(contact: Contact): Observable<any> 
  {
    const url = `${this.contactsUrl}/${contact._id}`;
    return this.http.patch<any>(url, { firstName: contact.firstName, lastName: contact.lastName, email: contact.email, phone: contact.phone, message: contact.message });
  }

  deleteContact(id: String): Observable<any> 
  {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
