import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {RouterModule, Routes} from '@angular/router';

import * as Auth0 from 'auth0-web';

import {CallbackComponent} from './callback.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import { NavComponent } from './nav/nav.component';

import {ApiCallComponent} from './apicall/apicall.component';
import {ApiCallService} from './apicall/apicall.service';

const appRoutes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'apicall', component: ApiCallComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    ApiCallComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'dev-bldw-h-w.auth0.com',
      audience: 'https://apisimplify.com.br',
      clientID: 'dAUM70DweYJySwmxruWVqx0RmjFwJdcg',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile manage:apicall'
    });
  }
}
