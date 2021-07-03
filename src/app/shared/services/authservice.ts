import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@app/core/models';
import firebase from 'firebase/app';
import 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: firebase.User;
  currentPassword: any;
  //userData: Observable<firebase.User>;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.currentPassword = String(password);
        this.SetUserData(result.user);

        this.userData = result.user;
        localStorage.setItem('user', JSON.stringify(this.userData));

        if (result.user) {
          this.ngZone.run(() => {
            this.router.navigate(['/admin/dashboard']);
          });
        } else {
          this.router.navigate(['admin/auth/verify-email']);
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email, password, username) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username });
        /* Call the SendVerificaitonMail() function when new user sign up and returns promise */
        // console.log('Sign Up Success!');
        this.currentPassword = password;
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verification when new user sign up
  async SendVerificationMail() {
    return (await this.afAuth.currentUser).sendEmailVerification().then(() => {
      this.router.navigate(['./admin/auth/verify-email']);
    });
  }

  // Reset Forget password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  // Returns true when email is verified
  get isUserVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // return true if the user auth by provider
  get isUserAuthByProvider(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.providerData[0].providerId !== 'password'
      ? true
      : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Sign in with FB
  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['admin/dashboard']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    // const ref:DatabaseReference  = FirebaseDatabase.getInstance().getReference("users/{userId}");

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  SignOut() {
    // console.log('Sign Out!');
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['./admin/auth/login']);
    });
  }

  // Remove a Current User Account
  removeUser(password = '') {
    password = !password ? this.currentPassword : password;
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const credential = firebase.auth.EmailAuthProvider.credential(
          user.email,
          password
        );
        user
          .reauthenticateWithCredential(credential)
          .then(() => {
            // Remove User Account of Authentication
            user
              .delete()
              .then(() => {
                // Remove User Account of DB
                var userRef = firebase
                  .firestore()
                  .collection('users')
                  .doc(user.uid);
                userRef
                  .delete()
                  .then(() => {
                    // console.log(`User ${user.displayName} of DB has deleted`);
                  })
                  // An error happened during deleting User of DB.
                  .catch((error) => {
                    // `Error during deleting User ${user.displayName} of DB happened, ${error}`;
                  });
              })
              // An error happened during deleting User of Authentication.
              .catch(function (error) {
                // console.log(
                //   `Error during deleting User ${user.displayName} of Authentication happened, ${error}`
                // );
              });
            this.router.navigate(['./admin/auth/login']);
          })
          .catch((error) => {
            alert(error);
          });
      }
    });
  }
}
