import { Routes } from '@angular/router';

import { CreateEventComponent } from './event-list/create-event/create-event.component';
//import { CreateScrapeComponent } from './scrapes-list/create-scrape/create-scrape.component';
import { EditEventComponent } from './event-list/edit-event/edit-event.component';
import { DetailsEventComponent } from './event-list/details-event/details-event.component';


// import { CreateCommentComponent } from './ticket-list/create-ticket/create-ticket.component';
// import { EditCommentComponent } from './ticket-list/edit-comment/edit-comment.component';
import { DetailsTicketComponent } from './ticket-list/details-ticket/details-ticket.component';

import { CreateCategoryComponent } from './categories-list/create-category/create-category.component';
import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
import { DetailsCategoryComponent } from './categories-list/details-category/details-category.component';

// import { CreateContactComponent } from './contacts-list/create-contact/create-contact.component';
// import { EditContactComponent } from './contacts-list/edit-contact/edit-contact.component';
// import { DetailsContactComponent } from './contacts-list/details-contact/details-contact.component';

// import { CreateScrapeComponent } from './scrapes-list/create-scrape/create-scrape.component';
// import { EditScrapeComponent } from './scrapes-list/edit-scrape/edit-scrape.component';
// import { DetailsScrapeComponent } from './scrapes-list/details-scrape/details-scrape.component';

import { CreateUserComponent } from './users-list/create-user/create-user.component';
import { EditUserComponent } from './users-list/edit-user/edit-user.component';
import { DetailsUserComponent } from './users-list/details-user/details-user.component';


export const TableListRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
     { path: 'CreateArticle',      component: CreateEventComponent },

    //  { path: 'CreateScrape',      component: CreateScrapeComponent },
    //  { path: 'EditScrape',      component: EditScrapeComponent },
    //  { path: 'DetailsScrape',      component: DetailsScrapeComponent },

     { path: 'EditArticle',      component: EditEventComponent },
     { path: 'DetailsArticle',      component: DetailsEventComponent },
    //  { path: 'CreateComment',      component: CreateCommentComponent },
    //  { path: 'EditComment',      component: EditCommentComponent },
     { path: 'DetailsComment',      component: DetailsTicketComponent },
     { path: 'CreateCategory',      component: CreateCategoryComponent },
     { path: 'EditCategory',      component: EditCategoryComponent },
     { path: 'DetailsCategory',      component: DetailsCategoryComponent },

    //  { path: 'CreateContact',      component: CreateContactComponent },
    //  { path: 'EditContact',      component: EditContactComponent },
    //  { path: 'DetailsContact',      component: DetailsContactComponent },

     { path: 'CreateUser',      component: CreateUserComponent },
     { path: 'EditUser',      component: EditUserComponent },
     { path: 'DetailsUser',      component: DetailsUserComponent },


    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'icons',          component: IconsComponent },
];
