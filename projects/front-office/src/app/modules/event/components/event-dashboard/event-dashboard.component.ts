import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { RXDemoService } from '../../services/rxdemo.service';

@Component({
  selector: 'fo-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.scss']
})
export class EventDashboardComponent implements OnInit {

  constructor(
    private rxdemoService: RXDemoService,
  ) { }

  ngOnInit(): void {
    this.observableDemo();
  }

  observableDemo(): void {
    this.rxdemoService.firstObservable();
  }

}
