import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/front-office/src/environments/environment';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'fo-header',
  template: `
    <mat-toolbar color="primary">
      <span>My app</span>
      <ul class="d-flex">
        <li class="menu-item mr-3">
          <a [routerLink]="['/home']" routerLinkActive="active">
            Home
          </a>
        </li>
        <li class="menu-item mr-3">
          <a [routerLink]="['/syntax']" routerLinkActive="active">
            Syntax
          </a>
        </li>
        <li class="menu-item mr-3">
          <a [routerLink]="['/event']" routerLinkActive="active">
            Event
          </a>
        </li>
        <li class="menu-item mr-3"><a href="{{adminUrl}}">Espace Admin</a></li>
      </ul>
    </mat-toolbar>
  `,
  styles: [`
   ul li {
    list-style-type: none;
    color: white;
   }

   .active {
     font-weight: bolder;
   }
  `],
})
export class HeaderComponent implements OnInit {
  adminUrl = environment.adminUrl;

  // menu = ;

  constructor() { }

  ngOnInit(): void {
  }

}
