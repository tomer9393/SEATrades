// import { Component, OnInit } from '@angular/core';
// import { User } from '../../../models/User';
// import { UsersService } from '../../../services/users.service';
// import { Router } from '@angular/router';
// import { Ticket } from '../../../models/ticket';

// @Component({
//   selector: 'app-create-user',
//   templateUrl: './create-user.component.html',
//   styleUrls: ['./create-user.component.css']
// })
// export class CreateUserComponent implements OnInit 
// {
  
//     user : User;  
  
//     constructor(private usersService : UsersService, private router: Router) { }
  
//     ngOnInit(): void {
//     }
    
//     onCreate(firstName: string, lastName: string, email: string, password: string, phone: string, tickets: Ticket[]){
//       if(firstName === '' || lastName === '' || email === '' || password === '' || phone === '' )
//       window.alert('Please fill all fields');
//       else{
//         this.usersService.addUser(email, password, true, firstName, lastName, phone).subscribe(data => {
//           this.user = data;
//           this.router.navigate(['/table-list']);
//         }, err => {
//           window.alert(err.error);
//           this.router.navigate(['/table-list']);
//         });
//       }
//     }
// }
