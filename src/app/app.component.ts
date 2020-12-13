import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

interface AppState {
  counter: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter$: Observable<number>;
  currentCounter;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select("counter");
    this.counter$.subscribe(x => {
      this.currentCounter = x;
      console.log(this.currentCounter);
    })
  }

  increment() {
    this.store.dispatch({ type: "INCREMENT", payload: this.currentCounter % 2 == 0 ? 1 : 2 })
  }
}
