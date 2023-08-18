import { ITabRoute } from "./tab-route.interface";

export class TabRoutes {

  private tabList: ITabRoute[] = [];

	constructor(tabList: ITabRoute[]) {
		this.tabList = tabList;
    this.defineLoaderForList();
	}

  addTabRoute(tabName: string, tabRoute: string){
    this.tabList.push({
      tabName: tabName,
      tabRoute: tabRoute,
      isLoaded: false
    });
  }

  getLoadedTab(tabName: string){
    let isLoaded = false;
    const tab = this.tabList.filter(tab => tab.tabName === tabName);
    if(tab && tab.length > 0){
      isLoaded = tab[0].isLoaded || false
    }
    return isLoaded;
  }

	getTabList(): ITabRoute[] {
		return this.tabList;
	}

  setLoadedTabByKey(key: number): void {
		this.tabList[key].isLoaded = true;
	}

  private defineLoaderForList(): void {
		if (this.tabList && this.tabList.length > 0) {
			this.tabList.forEach(tab => {
				tab.isLoaded = !!(tab.isLoaded);
			});
		}
	}
}
