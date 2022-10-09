import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-day-dropdown',
  templateUrl: './day-dropdown.component.html',
  styleUrls: ['./day-dropdown.component.css']
})
export class DayDropdownComponent implements OnInit {
  // Properties
  public expenses: any;
  public accounts: any;
  public start_app_date: Date = new Date(2022, 3, 4);
  public today = new Date();
  public days_needed: any = [];
  public update_button_text: string = '';
  public delete_button_text: string = '';

  constructor(
    private constants_service: ConstantsService
  ) { }

  ngOnInit(): void {
    this.expenses = this.constants_service.basic_expense_categories;
    this.accounts = this.constants_service.basic_account_categories;
    this.update_button_text = this.constants_service.update_button_text;
    this.delete_button_text = this.constants_service.delete_button_text;
    this.filter_out_needed_days();
  }

  filter_out_needed_days(){
    this.days_needed = this.constants_service.abbr_days_in_a_week.filter(
      (day) => day.value === this.today.getDay()
    );
  }

}
