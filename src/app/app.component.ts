import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
//MenuController
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { AuthService } from '../services/auth';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;
    signinPage: any = SigninPage;
    signupPage: any = SignupPage;
    isAuthenticated: boolean = false;
    @ViewChild('nav') nav: NavController;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private authService: AuthService //,private menuCtrl: MenuController
    ) {
        firebase.initializeApp({
            apiKey: 'AIzaSyAbJ3jTOLYnqDF5xqe5sZPd5r18n8eb9iw',
            authDomain: 'ionic3-recipe-book-e5b5c.firebaseapp.com'
        });
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.isAuthenticated = true;
                this.nav.setRoot(this.rootPage);
                //this.rootPage = TabsPage;
            } else {
                this.isAuthenticated = false;
                this.nav.setRoot(this.signinPage);
                //this.rootPage = SigninPage;
            }
        });
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    onLoad(page: any) {
        this.nav.setRoot(page);
    }

    onLogout() {
        this.authService.logout();
    }
}
