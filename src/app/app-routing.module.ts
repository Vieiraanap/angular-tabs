import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tab-component',
    loadChildren: () => import('./views/tabs-by-component/tabs-by-component.module').then(m => m.TabsByComponentModule)
  },
  {
    path: 'tab-route',
    loadChildren: () => import('./views/tabs-by-route/tabs-by-route.module').then(m => m.TabsByRouteModule)
  },
  {
    path: '',
    redirectTo: 'tab-component',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
