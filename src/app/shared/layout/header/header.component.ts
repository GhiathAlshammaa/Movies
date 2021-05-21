import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() projectTitle;
  navbarCollapsed = true;

  toggleNavbarCollapsing = () => {
    this.navbarCollapsed = !this.navbarCollapsed;
  };
  ngOnInit(): void {}
}
