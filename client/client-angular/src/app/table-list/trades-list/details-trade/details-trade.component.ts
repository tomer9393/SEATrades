import { Component, OnInit } from '@angular/core';
import { Trade } from '../../../models/Trade';
import { UsersService } from '../../../services/users.service';
import { TradeService } from '../../../services/trade.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { AdminUser } from '../../../models/admin-user';

@Component({
  selector: 'app-details-trade',
  templateUrl: './details-trade.component.html',
  styleUrls: ['./details-trade.component.css']
})
export class DetailsTradeComponent implements OnInit 
{
  
  loggedUser: AdminUser;
  trades: Trade = null;
  
    constructor(private tradesService : TradeService, private router:Router, private activatedRoute:ActivatedRoute, private loginService : LoginService
      ) {
      //this.router.getCurrentNavigation().extras.state;
    }
  
    ngOnInit(): void {
      this.trades=history.state;
      this.loggedUser = this.loginService.getConnectedUser();
    }
  
    // onEdit(){
    //   this.router.navigateByUrl('/EditUser', { state: this.user });
  
    // }

    isLoggedIn(adminUser : AdminUser){
      if(adminUser._id === this.loggedUser._id)
        return false;
      return true;
    }
    
    // onDelete()
    // {
    //   this.usersService.deleteUser(this.user._id).subscribe(data => {
    //     this.router.navigate(['/table-list']);
    //   }, err => {
    //     window.alert(err.error);
    //     this.router.navigate(['/table-list']);
    //   });
    // }
}
