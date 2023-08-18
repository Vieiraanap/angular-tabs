import { Component, EventEmitter } from '@angular/core';
import { TabRoutes } from 'src/app/components/tab/models/tab-routes';
import { ShowContentTabService } from './show-content-tab/show-content-tab.service';

@Component({
  selector: 'app-tabs-by-route',
  templateUrl: './tabs-by-route.component.html',
  styleUrls: ['./tabs-by-route.component.css']
})
export class TabsByRouteComponent {

  constructor(
    private showContentService: ShowContentTabService
  ) {}

  tabRoutes: TabRoutes = new TabRoutes([
    { tabName: 'TAB 1', tabRoute: 'component/1' },
    { tabName: 'TAB 2', tabRoute: `component/2` },
  ]);

  tabChange(tabIndex: number){
    this.tabRoutes.setLoadedTabByKey(tabIndex);
    this.showContentService.setTabIndex(tabIndex);
	}
}
