import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  } 
  
  @Input() projectTitle;
  navbarCollapsed = true;

  toggleNavbarCollapsing = () => {
    this.navbarCollapsed = !this.navbarCollapsed;
  };

  loginHandler(){
    this.router.navigate(['/auth/login']);
  }

  signOutHandler() {
    this.authService.SignOut()
  }
  ngOnInit(): void {}
}
