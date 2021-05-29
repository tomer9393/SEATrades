import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";
import { LoginService } from '../../services/login.service';
import { AdminUser } from '../../models/admin-user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  loggedUser: AdminUser;
  users : User[] = [];  
  @Input() search: string = '';
  isLogin = false;
  @Input() refresh: string = "false";


  constructor(private usersService : UsersService,  private router: Router, private loginService : LoginService){}

  ngOnInit() {
    this.loadAll();      
    this.loggedUser = this.loginService.getConnectedUser();
  }

  ngOnChanges(changes: String) {
    // changes.prop contains the old and the new value...
    if(this.search === "")
    { 
      this.loadAll();
    }

    if(this.refresh === "true")
      this.loadAll();
  } 

  loadAll()
  {
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
    }, err => {
      window.alert(err.error);
    });
  }

  isLoggedIn(adminUser : AdminUser){
    if(adminUser._id === this.loggedUser._id)
      return false;
    return true;
  }

  onDelete(user : User)
  {
    this.usersService.deleteUser(user._id).subscribe(data => {
      this.users.splice(this.users.indexOf(user),1);
    }, err => {
      window.alert(err.error);
      this.users.splice(this.users.indexOf(user),1);
    });
  }
  onDetails(user : User)
  {
    this.router.navigateByUrl('/DetailsUser', { state: user });
  }

  handlePanel(action : string)
  {
    this.loadAll();
  }
}
