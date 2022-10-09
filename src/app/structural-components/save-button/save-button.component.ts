import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {
  @Input() buttonText: string | undefined;
  @Input() buttonColor: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
