import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent {
  @ViewChild(TemplateRef) public headerTemplate!: TemplateRef<any>;
	@Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
