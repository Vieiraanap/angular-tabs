import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsByRouteComponent } from './tabs-by-route.component';

describe('TabsByRouteComponent', () => {
  let component: TabsByRouteComponent;
  let fixture: ComponentFixture<TabsByRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsByRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsByRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
