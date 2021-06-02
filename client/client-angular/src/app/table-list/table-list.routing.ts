import { Routes } from '@angular/router';

import { CreateCategoryComponent } from './categories-list/create-category/create-category.component';
import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
import { DetailsCategoryComponent } from './categories-list/details-category/details-category.component';

// import { CreateUserComponent } from './users-list/create-user/create-user.component';
// import { EditUserComponent } from './users-list/edit-user/edit-user.component';
import { DetailsUserComponent } from './users-list/details-user/details-user.component';

import { CreateAdminUserComponent } from './admin-users-list/create-admin-user/create-admin-user.component';
import { EditAdminUserComponent } from './admin-users-list/edit-admin-user/edit-admin-user.component';
import { DetailsAdminUserComponent } from './admin-users-list/details-admin-user/details-admin-user.component';

import { CreateContactComponent } from './contacts-list/create-contact/create-contact.component';
import { EditContactComponent } from './contacts-list/edit-contact/edit-contact.component';
import { DetailsContactComponent } from './contacts-list/details-contact/details-contact.component';


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

     { path: 'CreateCategory',      component: CreateCategoryComponent },
     { path: 'EditCategory',      component: EditCategoryComponent },
     { path: 'DetailsCategory',      component: DetailsCategoryComponent },

    //  { path: 'CreateUser',      component: CreateUserComponent },
    //  { path: 'EditUser',      component: EditUserComponent },
     { path: 'DetailsUser',      component: DetailsUserComponent },

     { path: 'CreateAdminUser',      component: CreateAdminUserComponent },
     { path: 'EditAdminUser',      component: EditAdminUserComponent },
     { path: 'DetailsAdminUser',      component: DetailsAdminUserComponent },

     { path: 'CreateContact',      component: CreateContactComponent },
     { path: 'EditContact',      component: EditContactComponent },
     { path: 'DetailsContact',      component: DetailsContactComponent },

    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'icons',          component: IconsComponent },
];
