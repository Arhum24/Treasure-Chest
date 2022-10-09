import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDropdownComponent } from './day-dropdown.component';

describe('DayDropdownComponent', () => {
  let component: DayDropdownComponent;
  let fixture: ComponentFixture<DayDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
