import { Component, Input, OnInit } from '@angular/core';
import { AdminUser } from '../../models/admin-user';
import { AdminUsersService } from '../../services/admin-users.service';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.css']
})
export class AdminUsersListComponent implements OnInit {

  loggedAdminUser: AdminUser;
  adminUsers : AdminUser[] = [];  
  @Input() search: string = '';
  isLogin = false;
  @Input() refresh: string = "false";


  constructor(private adminUsersService : AdminUsersService,  private router: Router, private loginService : LoginService){}

  ngOnInit() {
    this.loadAll();      
    this.loggedAdminUser = this.loginService.getConnectedUser();
  }

  ngOnChanges(changes: String) {
    // changes.prop contains the old and the new value...
    if(this.search === "")
    { 
      this.loadAll();
    }
    // else
    // { 
    //   this.usersService.filter(this.search).subscribe(data =>{
    //     this.users = data;
    //   }, err => {
    //     window.alert(err.error);
    //   })
    // }

    if(this.refresh === "true")
      this.loadAll();
  } 

  loadAll(){
    this.adminUsersService.getAdminUsers().subscribe(data => {
      this.adminUsers = data.users;
    }, err => {
      window.alert(err.error);
    });
  }

  isLoggedIn(adminUser : AdminUser){
    if(adminUser._id === this.loggedAdminUser._id)
      return false;
    return true;
  }

  onCreate(){
    this.router.navigateByUrl('/CreateAdminUser');
  }

  onEdit(adminUser : AdminUser){
    this.router.navigateByUrl('/EditAdminUser', { state: adminUser });
  }
  onDelete(adminUser : AdminUser){
    this.adminUsersService.deleteAdminUser(adminUser._id).subscribe(data => {
      this.adminUsers.splice(this.adminUsers.indexOf(adminUser),1);
    }, err => {
      window.alert(err.error);
      this.adminUsers.splice(this.adminUsers.indexOf(adminUser),1);
    });
  }
  onDetails(adminUser : AdminUser){
    this.router.navigateByUrl('/DetailsAdminUser', { state: adminUser });
  }

  handlePanel(action : string){
    this.loadAll();
  }
}
