import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../../models/admin-user';
import { AdminUsersService } from '../../../services/admin-users.service';
import { Router } from '@angular/router';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-create-admin-user',
  templateUrl: './create-admin-user.component.html',
  styleUrls: ['./create-admin-user.component.css']
})
export class CreateAdminUserComponent implements OnInit 
{
  
    adminUser : AdminUser;  
  
    constructor(private adminUsersService : AdminUsersService, private router: Router) { }
  
    ngOnInit(): void {
    }
    
    onCreate(firstName: string, lastName: string, email: string, password: string, phone: string, tickets: Ticket[]){
      if(firstName === '' || lastName === '' || email === '' || password === '' || phone === '' )
      window.alert('Please fill all fields');
      else{
        this.adminUsersService.addAdminUser(email, password, true, firstName, lastName, phone).subscribe(data => {
          this.adminUser = data;
          this.router.navigate(['/table-list']);
        }, err => {
          window.alert(err.error);
          this.router.navigate(['/table-list']);
        });
      }
    }
}
