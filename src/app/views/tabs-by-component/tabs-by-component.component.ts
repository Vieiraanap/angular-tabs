import { Component } from '@angular/core';
import { tabsContent } from 'src/app/data/tabs-component.const';

@Component({
  selector: 'app-tabs-by-component',
  templateUrl: './tabs-by-component.component.html',
  styleUrls: ['./tabs-by-component.component.css']
})
export class TabsByComponentComponent {

  tabsContent = tabsContent;
}
