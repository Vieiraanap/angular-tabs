import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsByRouteRoutingModule } from './tabs-by-route-routing.module';
import { TabsByRouteComponent } from './tabs-by-route.component';
import { TabModule } from 'src/app/components/tab/tab.module';
import { ShowContentTabComponent } from './show-content-tab/show-content-tab.component';


@NgModule({
  declarations: [
    TabsByRouteComponent,
    ShowContentTabComponent
  ],
  imports: [
    CommonModule,
    TabModule,
    TabsByRouteRoutingModule
  ]
})
export class TabsByRouteModule { }
