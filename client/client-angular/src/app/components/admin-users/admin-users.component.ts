import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from '../../services/admin-users.service';


@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  firstNameSearch = '';
  lastNameSearch = '';
  emailSearch = '';


  constructor(private adminUsersService: AdminUsersService) { }

  ngOnInit(): void {
  }

}
