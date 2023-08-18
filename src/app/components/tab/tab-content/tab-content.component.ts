import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabHeaderComponent } from '../tab-header/tab-header.component';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {

  @Input() disabled: boolean = false;
  @ContentChild(TabHeaderComponent) public tabHeader: TabHeaderComponent = new TabHeaderComponent;
  @ViewChild(TemplateRef) public tabContent!: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
