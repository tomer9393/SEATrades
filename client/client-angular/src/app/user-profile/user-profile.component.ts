import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AdminUser } from '../models/admin-user';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AdminUsersService } from "../services/admin-users.service";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  adminUser: AdminUser;

  constructor(private adminUsersService: AdminUsersService, private login: LoginService, private router:Router, private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.adminUser = this.login.getConnectedUser();
  }

  onUpdate(firstname: string, lastname: string, email: string, password: string, phone: string ) {
    if(firstname === '' || lastname === '' || email === '' || password === '' || phone === '' )
    window.alert('Please fill all fields');
    else{
      this.adminUser.firstname = firstname;
      this.adminUser.lastname = lastname;
      this.adminUser.email = email;
      this.adminUser.phone = phone;
      this.adminUser.password = password;
      this.adminUser.isAdmin = true;
      this.adminUsersService.updateAdminUser(this.adminUser).subscribe((data) => {
        this.adminUser = data;
      });
    }
  }
}
