import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { UsersListComponent } from './users-list/users-list.component';
// import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { EventsListComponent } from './event-list/events-list.component';
// import { ScrapesListComponent } from './scrapes-list/scrapes-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { TableListRoutes } from './table-list.routing';
import { CreateEventComponent } from './event-list/create-event/create-event.component';
import { EditEventComponent } from './event-list/edit-event/edit-event.component';
import { DetailsEventComponent } from './event-list/details-event/details-event.component';

import { TicketsListComponent } from './ticket-list/tickets-list.component';
// import { CreateCommentComponent } from './ticket-list/create-ticket/create-ticket.component';
// import { EditCommentComponent } from './ticket-list/edit-comment/edit-comment.component';
import { DetailsTicketComponent } from './ticket-list/details-ticket/details-ticket.component';

import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
import { CreateCategoryComponent } from './categories-list/create-category/create-category.component';
import { DetailsCategoryComponent } from './categories-list/details-category/details-category.component';

// import { DetailsContactComponent } from './contacts-list/details-contact/details-contact.component';
// import { EditContactComponent } from './contacts-list/edit-contact/edit-contact.component';
// import { CreateContactComponent } from './contacts-list/create-contact/create-contact.component';

// import { CreateScrapeComponent } from './scrapes-list/create-scrape/create-scrape.component';
// import { EditScrapeComponent } from './scrapes-list/edit-scrape/edit-scrape.component';
// import { DetailsScrapeComponent } from './scrapes-list/details-scrape/details-scrape.component';
import { CreateUserComponent } from './users-list/create-user/create-user.component';
import { EditUserComponent } from './users-list/edit-user/edit-user.component';
import { DetailsUserComponent } from './users-list/details-user/details-user.component';




@NgModule({
  declarations: [
    TableListComponent,
    EventsListComponent,
    CategoriesListComponent,
    UsersListComponent,
    // ContactsListComponent,
    EventsListComponent,
    // ScrapesListComponent,
    CreateEventComponent,
    EditEventComponent,
    DetailsEventComponent,
    TicketsListComponent,
    // CreateCommentComponent,
    // EditCommentComponent,
    DetailsTicketComponent,
    EditCategoryComponent,
    CreateCategoryComponent,
    DetailsCategoryComponent,
    // DetailsContactComponent,
    // EditContactComponent,
    // CreateContactComponent,
    // CreateScrapeComponent,
    // EditScrapeComponent,
    // DetailsScrapeComponent,
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
