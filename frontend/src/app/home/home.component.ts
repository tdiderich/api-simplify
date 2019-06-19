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
export class HomeComponent {}
