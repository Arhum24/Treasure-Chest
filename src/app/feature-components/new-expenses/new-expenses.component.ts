import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-new-expenses',
  templateUrl: './new-expenses.component.html',
  styleUrls: ['./new-expenses.component.css']
})
export class NewExpensesComponent implements OnInit {

  public expenses: any;
  public accounts: any;

  constructor(
    private constantsService: ConstantsService
  ) { }

  ngOnInit(): void {
    this.expenses = this.constantsService.basic_expense_categories;
    this.accounts = this.constantsService.basic_account_categories;
  }

  startDate = new Date(2020, 10, 1);

}
