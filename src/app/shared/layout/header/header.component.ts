import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService) {}
  @Input() projectTitle;
  navbarCollapsed = true;

  toggleNavbarCollapsing = () => {
    this.navbarCollapsed = !this.navbarCollapsed;
  };
  ngOnInit(): void {}
}
