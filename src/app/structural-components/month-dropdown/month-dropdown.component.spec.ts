import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDropdownComponent } from './month-dropdown.component';

describe('MonthDropdownComponent', () => {
  let component: MonthDropdownComponent;
  let fixture: ComponentFixture<MonthDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
