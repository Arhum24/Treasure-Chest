import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTreasureChestComponent } from './parent-treasure-chest.component';

describe('ParentTreasureChestComponent', () => {
  let component: ParentTreasureChestComponent;
  let fixture: ComponentFixture<ParentTreasureChestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTreasureChestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTreasureChestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
