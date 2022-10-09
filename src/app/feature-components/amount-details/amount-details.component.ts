import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-amount-details',
  templateUrl: './amount-details.component.html',
  styleUrls: ['./amount-details.component.css']
})
export class AmountDetailsComponent implements OnInit {
  // Decorators

  // Properties
  public accounts: any;
  public update_button_text: string = "";
  public edit_button_text: string = "";
  public is_editable: boolean = false;
  public total_amount: number = 0;

  constructor(
    private constants_service: ConstantsService
    ) {
   }

  ngOnInit(): void {
    this.accounts = this.constants_service.basic_account_categories;
    this.update_button_text = this.constants_service.update_button_text;
    this.edit_button_text = this.constants_service.edit_button_text;
    this.calculate_total_amount();
  }

  public calculate_total_amount(){
  }

  public make_amounts_editable(event: Event){
    this.is_editable = true;
  }

  public make_amounts_ineditable(event: Event){
    this.is_editable = false;
  }

}
