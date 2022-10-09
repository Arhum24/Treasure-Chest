import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  public basic_expense_categories: basic_expense_categories[] = [
    {value: 1, description: "Food"},
    {value: 2, description: "Home Rent"},
    {value: 3, description: "Gifts"},
    {value: 4, description: "Health/Medical"},
    {value: 5, description: "Car Fuel and Transport"},
    {value: 6, description: "Car Expenses"},
    {value: 7, description: "Personal Hygene"},
    {value: 8, description: "Telco Utilities"},
    {value: 9, description: "Travel"},
    {value: 10, description: "Streaming"},
    {value: 11, description: "Clothes"},
    {value: 12, description: "Internet Bill"},
    {value: 13, description: "Rp TRF"},
    {value: 14, description: "Bank Fees'"},
    {value: 15, description: "Servant Pays'"},
    {value: 16, description: "Charity"},
    {value: 17, description: "Investments"}
  ];

  public basic_income_categories: basic_income_categories[] = [
    {value: 1, description: "Paycheck"},
    {value: 2, description: "Savings"},
    {value: 3, description: "Increment"},
    {value: 4, description: "Bonus"},
    {value: 5, description: "Treat"}
  ];

  public basic_account_categories: basic_account_categories[] = [
    {value: 1, name: "Meezan"},
    {value: 2, name: "Allied"},
    {value: 3, name: "Pocket"}
  ]

  public abbr_days_in_a_week: abbr_days_in_a_week[] = [
    {value: 1, name: "Mon"},
    {value: 2, name: "Tue"},
    {value: 3, name: "Wed"},
    {value: 4, name: "Thu"},
    {value: 5, name: "Fri"},
    {value: 6, name: "Sat"},
    {value: 7, name: "Sun"}
  ];

  public abbr_months_in_a_year: abbr_months_in_a_year[] = [
    {value: 0, name: "Jan"},
    {value: 1, name: "Feb"},
    {value: 2, name: "Mar"},
    {value: 3, name: "Apr"},
    {value: 4, name: "May"},
    {value: 5, name: "Jun"},
    {value: 6, name: "Jul"},
    {value: 7, name: "Aug"},
    {value: 8, name: "Sept"},
    {value: 9, name: "Oct"},
    {value: 10, name: "Nov"},
    {value: 11, name: "Dec"}
  ];

  public update_button_text: string = "Update";
  public edit_button_text: string = "Edit";
  public save_button_text: string = "Save";
  public delete_button_text: string = "Delete";

}

interface basic_expense_categories {
  value: number;
  description: string;
}

interface basic_income_categories {
  value: number;
  description: string;
}

interface basic_account_categories {
  value: number;
  name: string;
}

interface abbr_months_in_a_year {
  value: number;
  name: string;
}

interface abbr_days_in_a_week {
  value: number;
  name: string;
}
