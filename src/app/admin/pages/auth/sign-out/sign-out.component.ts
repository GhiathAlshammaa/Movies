import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/authservice';

@Component({
  selector: 'app-sign-out',
  templateUrl: 'sign-out.component.html',
  styleUrls: ['sign-out.component.scss'],
})
export class SignOutComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.authService.SignOut();
  }
}
