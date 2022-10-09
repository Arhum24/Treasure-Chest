import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.css']
})
export class NewIncomeComponent implements OnInit {
  public incomes: any;
  public accounts: any;

  constructor(
    private constants_service: ConstantsService
  ) { }

  ngOnInit(): void {
    this.incomes = this.constants_service.basic_income_categories;
    this.accounts = this.constants_service.basic_account_categories;
  }

}
