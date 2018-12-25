import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ft-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public isPassShown = false;
  public visibilityIcon = 'visibility';
  public passFieldType = 'password';
  public passTooltipIconText = 'Show password';
  public maxDate: Date;

  constructor() {
  }

  ngOnInit() {
    this.maxDate = new Date(Date.now());
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
  }

  changePasswordVisibility() {
    this.isPassShown = !this.isPassShown;
    this.visibilityIcon = this.isPassShown ? 'visibility_off' : 'visibility';
    this.passFieldType = this.isPassShown ? 'text' : 'password';
    this.passTooltipIconText = this.isPassShown ? 'Hide password' : 'Show password';
  }

}
