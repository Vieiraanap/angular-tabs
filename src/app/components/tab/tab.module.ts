import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabItemComponent } from './tab-item/tab-item.component';

@NgModule({
  imports: [
    CommonModule,
		MatTabsModule,
		RouterModule
  ],
  declarations: [
    TabComponent,
    TabHeaderComponent,
    TabContentComponent,
    TabItemComponent
  ],
  exports: [
    TabComponent,
    TabHeaderComponent,
    TabContentComponent,
    TabItemComponent

  ]
})
export class TabModule { }
