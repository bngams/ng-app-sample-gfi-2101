import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from 'utils';

@Component({
  selector: 'fo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-office';

  // <portee> nom: <type>
  constructor(public utilsService: UtilsService) {
  }

  // lifecyclehooks
  ngOnInit(): void {
    this.utilsService.sayHello();
  }

  buttonClickedOnChildren(): void {
    console.log('buttonClickedOnChildren');
  }
}
