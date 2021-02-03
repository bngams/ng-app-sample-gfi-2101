import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDashboardComponent } from './components/event-dashboard/event-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: EventDashboardComponent },
  { path: '', redirectTo: '/event/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
