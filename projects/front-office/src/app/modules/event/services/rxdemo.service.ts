import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RXDemoService {

  constructor() { }

  firstPromise(): void {
    const promise = new Promise((resolve, reject) => {
      resolve(1); // only once
    });

    promise
      .then(r => { })
      .catch(r => { });
  }

  firstObservable(): void {
    const observable = new Observable<number>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
      }, 3000);
      subscriber.complete();
    });

    const observer = {
      next: (res: number) => console.log('next', res),
      error: (error: string) => console.log('next', error),
      complete: () => console.log('complete')
    };

    observable.subscribe(observer);

    // Partial<Observer>
    observable.subscribe({
      next: (res: number) => console.log('partial next', res),
      complete: () => console.log('partial complete')
    });

    // subscribe(functionNext, functionError, ...)
    observable.pipe(
      delay(2000)
    ).subscribe(r => console.log('dynamic next', r));

  }
}
