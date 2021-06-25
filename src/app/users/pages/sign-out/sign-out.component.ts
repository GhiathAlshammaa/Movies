import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: 'sign-out.component.html',
  styleUrls: ['sign-out.component.scss'],
})
export class SignOutComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.SignOut();
  }
}
