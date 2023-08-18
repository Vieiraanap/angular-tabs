import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsByComponentComponent } from './tabs-by-component.component';

describe('TabsByComponentComponent', () => {
  let component: TabsByComponentComponent;
  let fixture: ComponentFixture<TabsByComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsByComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsByComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
