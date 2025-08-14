import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdiplomaComponent } from './selectdiploma.component';

describe('SelectdiplomaComponent', () => {
  let component: SelectdiplomaComponent;
  let fixture: ComponentFixture<SelectdiplomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectdiplomaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectdiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
