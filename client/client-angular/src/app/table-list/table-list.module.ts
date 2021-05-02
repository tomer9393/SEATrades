import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { UsersListComponent } from './users-list/users-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { TableListRoutes } from './table-list.routing';

import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { CreateTicketComponent } from './tickets-list/create-ticket/create-ticket.component';
import { EditTicketComponent } from './tickets-list/edit-ticket/edit-ticket.component';
import { DetailsTicketComponent } from './tickets-list/details-ticket/details-ticket.component';

import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
import { CreateCategoryComponent } from './categories-list/create-category/create-category.component';
import { DetailsCategoryComponent } from './categories-list/details-category/details-category.component';

import { CreateUserComponent } from './users-list/create-user/create-user.component';
import { EditUserComponent } from './users-list/edit-user/edit-user.component';
import { DetailsUserComponent } from './users-list/details-user/details-user.component';




@NgModule({
  declarations: [
    TableListComponent,
    CategoriesListComponent,
    UsersListComponent,
    TicketsListComponent,
    TicketsListComponent,
    CreateTicketComponent,
    EditTicketComponent,
    DetailsTicketComponent,
    EditCategoryComponent,
    CreateCategoryComponent,
    DetailsCategoryComponent,
    DetailsTicketComponent,
    EditTicketComponent,
    CreateTicketComponent,
    CreateUserComponent,
    EditUserComponent,
    DetailsUserComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(TableListRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class TableListModule { } 
