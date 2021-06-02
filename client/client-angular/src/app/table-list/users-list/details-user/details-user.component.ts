import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UsersService } from '../../../services/users.service';
import { AdminUsersService } from '../../../services/admin-users.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { AdminUser } from '../../../models/admin-user';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  
  loggedUser: AdminUser;
  user: User = null;
  
    constructor(private usersService : UsersService, private router:Router, private activatedRoute:ActivatedRoute, private loginService : LoginService
      ) {
      //this.router.getCurrentNavigation().extras.state;
    }
  
    ngOnInit(): void {
      this.user=history.state;
      this.loggedUser = this.loginService.getConnectedUser();
    }
  
    onEdit(){
      this.router.navigateByUrl('/EditUser', { state: this.user });
  
    }

    isLoggedIn(adminUser : AdminUser){
      if(adminUser._id === this.loggedUser._id)
        return false;
      return true;
    }
    
    onDelete(){
      this.usersService.deleteUser(this.user._id).subscribe(data => {
        this.router.navigate(['/table-list']);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/table-list']);
      });
    }
}
