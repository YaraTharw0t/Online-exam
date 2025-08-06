import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarblankComponent } from './navbarblank.component';

describe('NavbarblankComponent', () => {
  let component: NavbarblankComponent;
  let fixture: ComponentFixture<NavbarblankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarblankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarblankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
