import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiCall} from '../apicall/apicall.model';
import {ApiCallComponent} from '../apicall/apicall.component';
import {ApiCallService} from '../apicall/apicall.service';
import {Router} from "@angular/router";
import { RouterOutlet } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  apicall = {
    name: '',
    endpoint: '',
    headers: '',
    parameters: '',
  };

  constructor(private apiCallApi: ApiCallService, private router: Router) { }

  updateName(event: any) {
    this.apicall.name = event.target.value;
  }

  updateEndpoint(event: any) {
    this.apicall.endpoint = event.target.value;
  }

  updateHeaders(event: any) {
    this.apicall.headers = event.target.value;
  }

  updateParameters(event: any) {
    this.apicall.parameters = event.target.value;
  }

  saveApiCalls() {
    this.apiCallApi
      .saveApiCalls(this.apicall)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }
}
