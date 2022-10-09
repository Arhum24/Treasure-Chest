import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-month-dropdown',
  templateUrl: './month-dropdown.component.html',
  styleUrls: ['./month-dropdown.component.css']
})
export class MonthDropdownComponent implements OnInit {
  // Properties
  public today = new Date();
  public current_month: number = this.today.getMonth();
  public months_needed: any = [];

  constructor(
    private constants_service: ConstantsService
  ) { }

  ngOnInit(): void {
    this.filter_out_needed_months();
  }

  filter_out_needed_months(){
    this.months_needed = this.constants_service.abbr_months_in_a_year.filter(
      (year) => year.value === this.current_month
    );
  }

}
