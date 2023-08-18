import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsByRouteComponent } from './tabs-by-route.component';
import { ShowContentTabComponent } from './show-content-tab/show-content-tab.component';

const routes: Routes = [
  {
    path: '',
    component: TabsByRouteComponent,
    children: [
      {
        path: 'component/:id',
        component: ShowContentTabComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsByRouteRoutingModule { }
