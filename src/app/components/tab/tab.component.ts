import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { TabRoutes } from './models/tab-routes';
import { ITabRoute } from './models/tab-route.interface';
import { TabContentComponent } from './tab-content/tab-content.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements AfterViewInit {

  // current tab route to be displayed
  activeTabRoute: ITabRoute;

  // component that gets the displayed data
	contents: TabContentComponent[] = [];

  // time transition between tabs buit by components
	@Input() animationDuration: number = 0;

  // tabs displayed by the given route
  @Input() routes: TabRoutes = new TabRoutes([]);

  // set the tab to change to
	@Output() tabIndexChange: EventEmitter<number> = new EventEmitter();

  // used to access the components inside TabContentComponent
  @ContentChildren(TabContentComponent,{ descendants: true }) contentList!: QueryList<TabContentComponent>;

	constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) { }

	ngAfterViewInit(): void {
    // set the list of tabs to be shown when buidTabsByComponents
		this.contents = this.contentList.toArray();
		this.contentList.changes.subscribe((value: QueryList<TabContentComponent>) => {
			this.contents = value.toArray();
		});

    // set the list of tabs to be shown when buidTabsByRoutes
   	if (this.routes.getTabList().length > 0) {
      // gets the current route
			const url: string = this.router.url;

      // the first activeTabRoute is always the first list element
			this.activeTabRoute = this.routes.getTabList()[0];

      // in case user sets another tab as active and the page is realoaded,
      // changes the activeTabRoute to match the current route
			for (let i = 0; i <= this.routes.getTabList().length; i++) {
				let route: ITabRoute = this.routes.getTabList()[i];

        // checks if the current route url matches the tabRoute in the list
				if (url.includes(route?.tabRoute)) {
					this.activeTabRoute = route
					break;
				}
			}

      // redirects user to the defined active route url
			void this.router.navigate([url]);
		}

    // detect changes in the component
    this.changeDetectorRef.detectChanges();
	}

  // get the tabIndexChange and emits it to parent component
	tabChange(tabIndex: number): void {
		this.tabIndexChange.emit(tabIndex);
	}

  // checks if tabs will be buit by components
	buildTabsByComponents(): boolean {
		return (!(this.routes && this.routes.getTabList().length > 0) && (this.contentList && this.contentList.length > 0));
	}

  // checks if tabs will be buit by routes
  buildTabsByRoutes(): boolean {
		return (!(this.contentList && this.contentList.length > 0) && (this.routes && this.routes.getTabList().length > 0))
	}

}
