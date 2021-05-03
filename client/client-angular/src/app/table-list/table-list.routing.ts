import { Routes } from '@angular/router';


import { CreateTicketComponent } from './tickets-list/create-ticket/create-ticket.component';
import { EditTicketComponent } from './tickets-list/edit-ticket/edit-ticket.component';
import { DetailsTicketComponent } from './tickets-list/details-ticket/details-ticket.component';

import { CreateCategoryComponent } from './categories-list/create-category/create-category.component';
import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
import { DetailsCategoryComponent } from './categories-list/details-category/details-category.component';

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

     { path: 'CreateTicket',      component: CreateTicketComponent },
     { path: 'EditTicket',      component: EditTicketComponent },
     { path: 'DetailsTicket',      component: DetailsTicketComponent },
     { path: 'CreateCategory',      component: CreateCategoryComponent },
     { path: 'EditCategory',      component: EditCategoryComponent },
     { path: 'DetailsCategory',      component: DetailsCategoryComponent },

     { path: 'CreateUser',      component: CreateUserComponent },
     { path: 'EditUser',      component: EditUserComponent },
     { path: 'DetailsUser',      component: DetailsUserComponent },


    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'icons',          component: IconsComponent },
];
