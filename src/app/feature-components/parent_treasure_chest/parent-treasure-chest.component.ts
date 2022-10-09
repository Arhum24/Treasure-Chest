import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-treasure-chest',
  templateUrl: './parent-treasure-chest.component.html',
  styleUrls: ['./parent-treasure-chest.component.css']
})
export class ParentTreasureChestComponent implements OnInit {
  // Decorators

  // Properties
  public switch_to_register: boolean = false;
  public is_logged_in: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open_register_form(should_switch_to_register: boolean){
    this.switch_to_register = true;
  }

  open_login_form(should_switch_to_login: boolean){
    this.switch_to_register = false;
  }

  should_log_in(should_log_in: boolean){
    this.switch_to_register = false;
    this.is_logged_in = true;
  }

  logout(should_logout: boolean){
    this.is_logged_in = false; 
  }

}
