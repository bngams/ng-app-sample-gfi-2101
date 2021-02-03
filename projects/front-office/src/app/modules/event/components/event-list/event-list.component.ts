import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'fo-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[] = [] as Event[];
  events$!: Observable<Event[]>;

  constructor(private evService: EventService) {
  }

  ngOnInit(): void {
    this.loadEvents$();
  }

  loadEvents(): void {
    this.evService.findAll().subscribe(data => {
      this.events = data;
    });
  }

  loadEvents$(): void {
    this.events$ = this.evService.findAll();
  }

}
