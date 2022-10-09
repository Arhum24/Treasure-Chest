import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.css']
})
export class HeaderInfoComponent implements OnInit {
  // Decorators
  @Output() logout_bool_output: EventEmitter<boolean> = new EventEmitter();

  // Properties
  public should_logout: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  logout(event: Event){
    this.should_logout = true;
    this.logout_bool_output.emit(this.should_logout);
  }

}
