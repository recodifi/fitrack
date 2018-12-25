import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ft-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<MouseEvent>();

  constructor() {
  }

  ngOnInit() {
  }

  public onSidenavToogle($event) {
    this.toggleSidenav.emit($event);
  }

}
