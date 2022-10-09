import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastAmountDetailsComponent } from './past-amount-details.component';

describe('PastAmountDetailsComponent', () => {
  let component: PastAmountDetailsComponent;
  let fixture: ComponentFixture<PastAmountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastAmountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastAmountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
