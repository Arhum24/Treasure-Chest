import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-past-amount-details',
  templateUrl: './past-amount-details.component.html',
  styleUrls: ['./past-amount-details.component.css'],
})
export class PastAmountDetailsComponent implements OnInit {
  // Properties

  constructor(
    private constants_service: ConstantsService
  ) {}

  ngOnInit(): void {
  }

}
