import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContentTabComponent } from './show-content-tab.component';

describe('ShowContentTabComponent', () => {
  let component: ShowContentTabComponent;
  let fixture: ComponentFixture<ShowContentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowContentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
