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
              // this.props.history.push("/verification-email-verified")
              // window.alert('Email verified now!');
              this.activeToast = true;
              console.log(`activeToast: ${this.activeToast}`);
              clearInterval(this.checkForVerifiedInterval);
            }
          });
        } else {
          console.log('No User loged in!');
        }
      });
    }, 1000);
  }
}
