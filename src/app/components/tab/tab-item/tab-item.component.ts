import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { TabHeaderComponent } from '../tab-header/tab-header.component';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent {

  @Input() disabled: boolean = false;
  @ContentChild(TabHeaderComponent) public tabHeader: TabHeaderComponent = new TabHeaderComponent;
  @ViewChild(TemplateRef) public contentTemplate!: TemplateRef<TabContentComponent>;

  constructor() { }

  ngOnInit() {
  }

}
