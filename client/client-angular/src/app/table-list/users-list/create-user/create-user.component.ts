import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
    user : User;  
  
    constructor(private usersService : UsersService, private router: Router) { }
  
    ngOnInit(): void {
    }
    
    onCreate(email: string, password: string, admin: Boolean, firstName: string, lastName: string, phoneNumber: string){
      if(email === '' || password === '' || firstName === '' || lastName === '' || phoneNumber === '' )
      window.alert('Please fill all fields');
      else{
        this.usersService.addUser(email, password, true, firstName, lastName, phoneNumber).subscribe(data => {
          this.user = data;
          this.router.navigate(['/table-list']);
        }, err => {
          window.alert(err.error);
          this.router.navigate(['/table-list']);
        });
      }
    }
}
