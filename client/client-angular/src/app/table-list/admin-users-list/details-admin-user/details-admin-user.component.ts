import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../../models/admin-user';
import { AdminUsersService } from '../../../services/admin-users.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-details-admin-user',
  templateUrl: './details-admin-user.component.html',
  styleUrls: ['./details-admin-user.component.css']
})
export class DetailsAdminUserComponent implements OnInit {
  
  loggedAdminUser: AdminUser;
  adminUser: AdminUser = null;
  
    constructor(private adminUsersService : AdminUsersService, private router:Router, private activatedRoute:ActivatedRoute, private loginService : LoginService
      ) {
      //this.router.getCurrentNavigation().extras.state;
    }
  
    ngOnInit(): void {
      this.adminUser=history.state;
      this.loggedAdminUser = this.loginService.getConnectedUser();
    }
  
    onEdit(){
      this.router.navigateByUrl('/EditUser', { state: this.adminUser });
  
    }

    isLoggedIn(adminUser : AdminUser){
      if(adminUser._id === this.loggedAdminUser._id)
        return false;
      return true;
    }
    
    onDelete(){
      this.adminUsersService.deleteAdminUser(this.adminUser._id).subscribe(data => {
        this.router.navigate(['/table-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/table-list']);
      });
    }
}
