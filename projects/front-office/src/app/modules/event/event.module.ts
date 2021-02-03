import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventDashboardComponent } from './components/event-dashboard/event-dashboard.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { UIModule } from '../../ui.module';


@NgModule({
  declarations: [EventDashboardComponent, EventListComponent, EventCardComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    UIModule
  ]
})
export class EventModule { }
