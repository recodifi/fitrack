import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ft-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isPassShown = false;
  public visibilityIcon = 'visibility';
  public passFieldType = 'password';
  public passTooltipIconText = 'Show password';

  constructor() {
  }

  ngOnInit() {
  }

  changePasswordVisibility() {
    this.isPassShown = !this.isPassShown;
    this.visibilityIcon = this.isPassShown ? 'visibility_off' : 'visibility';
    this.passFieldType = this.isPassShown ? 'text' : 'password';
    this.passTooltipIconText = this.isPassShown ? 'Hide password' : 'Show password';
  }
}
