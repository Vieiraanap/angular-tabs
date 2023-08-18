import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsByComponentRoutingModule } from './tabs-by-component-routing.module';
import { TabsByComponentComponent } from './tabs-by-component.component';
import { TabModule } from 'src/app/components/tab/tab.module';


@NgModule({
  declarations: [
    TabsByComponentComponent
  ],
  imports: [
    CommonModule,
    TabModule,
    TabsByComponentRoutingModule
  ]
})
export class TabsByComponentModule { }
