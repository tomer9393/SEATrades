import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { RealTimeService } from '../services/real-time.service';
import { TicketService } from '../services/tickets.service';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  activeUsersCounter : Number;
  categoriesCounter : Number;
  ticketsCounter : Number;

  constructor(private realTimeservice : RealTimeService, private articlesService : TicketService, private categoriesService : CategoriesService){

  }

  ngOnInit() {
    this.articlesService.getNumOfTickets().subscribe((count) => {
      this.ticketsCounter = count;
    });
    this.categoriesService.getNumOfCategories().subscribe((count) => {
      this.categoriesCounter = count;
    });
    this.realTimeservice.getNumOfActiveUsers().subscribe((count) => {
      this.activeUsersCounter = count;
    });
    this.load();
  }

  load() {
    this.realTimeservice.currentActiveUsersCounter.subscribe(counter => this.activeUsersCounter = counter);
    this.realTimeservice.currentCategoriesCounter.subscribe(counter => this.categoriesCounter = counter);
    this.realTimeservice.currentArticlesCounter.subscribe(counter => this.ticketsCounter = counter);
  } 
}
