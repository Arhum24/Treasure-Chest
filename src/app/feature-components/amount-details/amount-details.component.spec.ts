import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountDetailsComponent } from './amount-details.component';

describe('AmountDetailsComponent', () => {
  let component: AmountDetailsComponent;
  let fixture: ComponentFixture<AmountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
