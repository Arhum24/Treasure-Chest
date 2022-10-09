import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialAmountDetailDialogComponent } from './initial-amount-detail-dialog.component';

describe('InitialAmountDetailDialogComponent', () => {
  let component: InitialAmountDetailDialogComponent;
  let fixture: ComponentFixture<InitialAmountDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialAmountDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialAmountDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
