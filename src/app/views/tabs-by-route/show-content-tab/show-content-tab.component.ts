import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowContentTabService } from './show-content-tab.service';

@Component({
  selector: 'app-show-content-tab',
  templateUrl: './show-content-tab.component.html',
  styleUrls: ['./show-content-tab.component.css']
})
export class ShowContentTabComponent implements OnInit, OnDestroy{

  tabIndex: number;
  tabIndex$: Subscription;

  constructor(
    private showContentService: ShowContentTabService
  ) {}

  ngOnDestroy(): void {
    this.tabIndex$?.unsubscribe();
  }

  ngOnInit(): void {
    this.tabIndex$ = this.showContentService.tabIndex$.subscribe(
      tabIndex => this.tabIndex = tabIndex + 1
    )
  }

}
