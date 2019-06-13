import * as Auth0 from 'auth0-web';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import { RouterOutlet } from '@angular/router';
import {ApiCall} from './apicall.model';
import {ApiCallService} from './apicall.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'apicall',
  template: `
    <div>Loading API Call details...</div>
  `,
})
export class ApiCallComponent implements OnInit, OnDestroy {
  apiCallListSubs: Subscription;
  apiCallList: ApiCall[];

  constructor(public apiCallApi: ApiCallService) {
  }

  ngOnInit() {
    this.apiCallListSubs = this.apiCallApi
      .getApiCalls()
      .subscribe(res => {
          this.apiCallList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.apiCallListSubs.unsubscribe();
  }
}
