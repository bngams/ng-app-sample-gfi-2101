import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fo-header',
  template: `
    <mat-toolbar color="primary">
      <span>My app</span>
    </mat-toolbar>
  `,
  styles: [`
  `],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
