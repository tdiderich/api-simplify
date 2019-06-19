import { RouterOutlet } from '@angular/router';
import {ApiCallService} from './apicall/apicall.service';
import {ApiCall} from './apicall/apicall.model';
import {ApiCallComponent} from './apicall/apicall.component';
import {Subscription} from 'rxjs/Subscription';
import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
