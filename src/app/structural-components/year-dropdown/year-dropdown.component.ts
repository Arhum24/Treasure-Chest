import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-dropdown',
  templateUrl: './year-dropdown.component.html',
  styleUrls: ['./year-dropdown.component.css']
})
export class YearDropdownComponent implements OnInit {
  // Properties
  public today = new Date();
  public current_year: number = this.today.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
