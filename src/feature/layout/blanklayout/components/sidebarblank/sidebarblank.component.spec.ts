import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarblankComponent } from './sidebarblank.component';

describe('SidebarblankComponent', () => {
  let component: SidebarblankComponent;
  let fixture: ComponentFixture<SidebarblankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarblankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
