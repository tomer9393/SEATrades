// import { Component, OnInit } from '@angular/core';
// import * as Chartist from 'chartist';
// // import { RealTimeService } from '../services/real-time.service';
// import { EventsService } from '../services/events.service';
// import { CategoriesService } from '../services/categories.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit 
// {

//   activeUsersCounter : Number;
//   categoriesCounter : Number;
//   eventsCounter : Number;

//   // private realTimeservice : RealTimeService
//   constructor(private eventsService : EventsService, private categoriesService : CategoriesService){

//   }

//   ngOnInit() {
//     this.eventsService.getNumOfEvents().subscribe((count) => {
//       this.eventsCounter = count;
//     });
//     this.categoriesService.getNumOfCategories().subscribe((count) => {
//       this.categoriesCounter = count;
//     });
//     // this.realTimeservice.getNumOfActiveUsers().subscribe((count) => {
//     //   this.activeUsersCounter = count;
//     // });
//     // this.load();
//   }

//   // load() {
//   //   this.realTimeservice.currentActiveUsersCounter.subscribe(counter => this.activeUsersCounter = counter);
//   //   this.realTimeservice.currentCategoriesCounter.subscribe(counter => this.categoriesCounter = counter);
//   //   this.realTimeservice.currentArticlesCounter.subscribe(counter => this.eventsCounter = counter);
//   // } 
// }
