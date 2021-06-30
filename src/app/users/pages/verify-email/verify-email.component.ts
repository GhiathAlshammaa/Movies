import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/authservice';
import firebase from 'firebase/app';

@Component({
  selector: 'app-verify-email',
  templateUrl: 'verify-email.component.html',
  styleUrls: ['verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  checkForVerifiedInterval;
  activeToast = false;

  constructor(public authService: AuthService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.checkForVerifiedInterval = setInterval(() => {
      firebase?.auth().onAuthStateChanged((user) => {
        if (user) {
          user.reload().then((ok) => {
            if (firebase.auth().currentUser?.emailVerified) {
              this.activeToast = true;

              let user = JSON.parse(localStorage.getItem('user'));
              user.emailVerified = true;

              localStorage.setItem('user', JSON.stringify(user));
              JSON.parse(localStorage.getItem('user'));

              this.authService.SetUserData(user);

              clearInterval(this.checkForVerifiedInterval);
            }
          });
        } else {
          // console.log('No User loged in!');
        }
      });
    }, 1000);
  }
}
