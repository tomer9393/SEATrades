import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../models/contact';
import { ContactsService } from '../../../services/contacts.service';
import { Router } from '@angular/router';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact : Contact;  

  constructor(private contactsService : ContactsService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(firstName: String, lastName: String, email: String, phone: String, message: String){
    if(firstName === '' || lastName === '' || email === '' || phone === '' || message === '')
    window.alert('Please fill all fields');
    else{
      this.contactsService.addContact(firstName, lastName, email, phone, message).subscribe(data => {
        this.contact = data;
        this.router.navigate(['/table-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/table-list']);
      });
    }
  }
}
