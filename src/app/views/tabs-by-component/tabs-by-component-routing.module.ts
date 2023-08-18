import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsByComponentComponent } from './tabs-by-component.component';

const routes: Routes = [
  {
    path: '',
    component: TabsByComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsByComponentRoutingModule { }
