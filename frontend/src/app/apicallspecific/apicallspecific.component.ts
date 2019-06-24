import * as Auth0 from 'auth0-web';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import { RouterOutlet } from '@angular/router';
import {ApiCall} from '../apicall/apicall.model';
import {ApiCallService} from '../apicall/apicall.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-apicallspecific',
  templateUrl: './apicallspecific.component.html',
  styleUrls: ['./apicallspecific.component.css']
})
export class ApicallspecificComponent implements OnInit, OnDestroy {
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

  getSpecificApiCalls(value: number) {
    this.apiCallListSubs = this.apiCallApi
      .getSpecificApiCalls(value)
      .subscribe(res => {
          this.apiCallList = res;
        },
        console.error
      );
  }
}
