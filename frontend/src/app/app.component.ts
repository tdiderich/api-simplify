import { RouterOutlet } from '@angular/router';
import {ApiCallService} from './apicall/apicall.service';
import {ApiCall} from './apicall/apicall.model';
import {Subscription} from 'rxjs/Subscription';
import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  apiCallListSubs: Subscription;
  apiCallList: ApiCall[];

  constructor(private apiCallApi: ApiCallService) {
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
