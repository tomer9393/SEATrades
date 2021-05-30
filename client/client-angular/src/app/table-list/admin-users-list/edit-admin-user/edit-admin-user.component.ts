import { Component, OnInit } from "@angular/core";
import { AdminUser } from "../../../models/admin-user";
import { AdminUsersService } from "../../../services/admin-users.service";
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-edit-admin-user",
  templateUrl: "./edit-admin-user.component.html",
  styleUrls: ["./edit-admin-user.component.css"],
})
export class EditAdminUserComponent implements OnInit {
  adminUser: AdminUser = null;

  constructor(
    private adminUsersService: AdminUsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    //this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.adminUser = history.state;
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
        this.router.navigate(["/table-list"]);
      }, err => {
        window.alert(err.error);
        this.router.navigate(['/table-list']);
      });
    }
  }
}
