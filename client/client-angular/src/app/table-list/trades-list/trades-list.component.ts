import { Component, Input, OnInit } from '@angular/core';
import { Trade } from '../../models/trade';
import { TradeService } from '../../services/trade.service';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";
import { LoginService } from '../../services/login.service';
import { AdminUser } from '../../models/admin-user';

@Component({
  selector: 'app-trades-list',
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.css']
})
export class TradesListComponent implements OnInit {

  loggedUser: AdminUser;
  trades : Trade[] = [];  
  @Input() search: string = '';
  isLogin = false;
  @Input() refresh: string = "false";


  constructor(private tradesService : TradeService,  private router: Router, private loginService : LoginService){}

  ngOnInit() 
  {
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
    this.tradesService.getTrades().subscribe(data => {
      this.trades = data.users;
    }, err => {
      window.alert(err.error);
    });
  }

  isLoggedIn(adminUser : AdminUser)
  {
    if(adminUser._id === this.loggedUser._id)
      return false;
    return true;
  }

  // onDelete(user : User)
  // {
  //   this.usersService.deleteUser(user._id).subscribe(data => {
  //     this.users.splice(this.users.indexOf(user),1);
  //   }, err => {
  //     window.alert(err.error);
  //     this.users.splice(this.users.indexOf(user),1);
  //   });
  // }
  onDetails(trade : Trade)
  {
    this.router.navigateByUrl('/DetailsTrade', { state: trade });
  }

  handlePanel(action : string)
  {
    this.loadAll();
  }
}
