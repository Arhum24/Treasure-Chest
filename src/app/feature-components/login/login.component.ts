import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Decorators
  @Output() login_form_bool_output: EventEmitter<boolean> = new EventEmitter();
  @Output() loggedin_bool_output: EventEmitter<boolean> = new EventEmitter();

  // Properties
  public username: string = "";
  public password: string = "";
  public hide_password: boolean = true;
  public switch_to_register: boolean = false;
  public is_user_logged_in: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open_register_form(event: Event){
    this.switch_to_register = true;
    this.login_form_bool_output.emit(this.switch_to_register);
  }

  user_is_loggedin(event: Event){
    this.is_user_logged_in = true;
    this.loggedin_bool_output.emit(this.is_user_logged_in);
  }

  email_form_control = new UntypedFormControl('', [Validators.required, Validators.email]);
  password_form_control = new UntypedFormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const is_submitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || is_submitted));
  }
}
