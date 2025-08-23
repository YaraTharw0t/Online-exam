import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsubjectComponent } from './subsubject.component';

describe('SubsubjectComponent', () => {
  let component: SubsubjectComponent;
  let fixture: ComponentFixture<SubsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
