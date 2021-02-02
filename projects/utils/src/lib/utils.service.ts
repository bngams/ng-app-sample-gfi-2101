import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  sayHello(): void {
    console.log("Hello from lib; edit");
  }
}
