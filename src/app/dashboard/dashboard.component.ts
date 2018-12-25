import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ft-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isSidenavOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  public onToggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  public onSidenavClosed() {
    this.isSidenavOpen = false;
  }

}
