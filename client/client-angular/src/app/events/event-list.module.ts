import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './event-list.component';

// import { CategoriesListComponent } from './categories-list/categories-list.component';
// import { UsersListComponent } from './users-list/users-list.component';
import { AllEventsListComponent } from './all-events/all-events-list.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { EventsListRoutes } from './event-list.routing';
import { CreateEventComponent } from './all-events/create-event/create-event.component';
import { EditEventComponent } from './all-events/edit-event/edit-event.component';
import { DetailsEventComponent } from './all-events/details-event/details-event.component';


import { TicketsListComponent } from './all-events/details-event/tickets-list/tickets-list.component';
import { CreateTicketComponent } from './all-events/details-event/tickets-list/create-ticket/create-ticket.component';
import { EditTicketComponent } from './all-events/details-event/tickets-list/edit-ticket/edit-ticket.component';
import { DetailsTicketComponent } from './all-events/details-event/tickets-list/details-ticket/details-ticket.component';

// import { EditCategoryComponent } from './categories-list/edit-category/edit-category.component';
// import { CreateCategoryComponent } from './categories-list/create-category/create-category.component';
// import { DetailsCategoryComponent } from './categories-list/details-category/details-category.component';

// import { CreateUserComponent } from './users-list/create-user/create-user.component';
// import { EditUserComponent } from './users-list/edit-user/edit-user.component';
// import { DetailsUserComponent } from './users-list/details-user/details-user.component';




@NgModule({
  declarations: [
    // TableListComponent,
    EventsListComponent,
    // CategoriesListComponent,
    // UsersListComponent,
    TicketsListComponent,
    AllEventsListComponent,
    CreateEventComponent,
    EditEventComponent,
    DetailsEventComponent,
    TicketsListComponent,
    CreateTicketComponent,
    EditTicketComponent,
    DetailsTicketComponent,
    // EditCategoryComponent,
    // CreateCategoryComponent,
    // DetailsCategoryComponent,
    // DetailsTicketComponent,
    // EditTicketComponent,
    // CreateTicketComponent,
    // CreateUserComponent,
    // EditUserComponent,
    // DetailsUserComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(EventsListRoutes),
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
export class EventsListModule { } 
