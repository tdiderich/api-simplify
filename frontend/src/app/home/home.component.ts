import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiCall} from '../apicall/apicall.model';
import {ApiCallService} from '../apicall/apicall.service';
import {Router} from "@angular/router";
import { RouterOutlet } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
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
