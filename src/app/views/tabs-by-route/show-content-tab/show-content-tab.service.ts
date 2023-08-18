import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowContentTabService {

  private tabIndex: Subject<number> = new Subject();
  tabIndex$ = this.tabIndex.asObservable();

  constructor() { }

  setTabIndex(index: number) {
    this.tabIndex.next(index);
  }

}
