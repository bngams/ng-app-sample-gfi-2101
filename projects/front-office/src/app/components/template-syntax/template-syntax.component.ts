import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fo-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss'],
})
export class TemplateSyntaxComponent implements OnInit {
  // type inference
  @Input()
  componentTitle = 'Hello world!!';

  @Output()
  buttonClickedEvent = new EventEmitter<string>();

  today = new Date();
  isDisabled = false;
  logoColor = 'black';

  constructor() {
    console.log('constructor', this.componentTitle);
  }

  ngOnInit(): void {
    console.log('onInit', this.componentTitle);
  }

  buttonClicked(event: unknown): void {
    console.log('clicked', event);
    this.buttonClickedEvent.emit('string value');
  }

  // hack to access template variable
  toggleDisabled(button: any): void {
    console.log(button.__proto__);
    this.isDisabled = !this.isDisabled;
  }

}
