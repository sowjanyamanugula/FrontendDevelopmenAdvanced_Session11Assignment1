import { Component } from '@angular/core';
import {AddresssService} from './addresss.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AddresssService]
})
export class AppComponent {
  title = 'Session 10 Assignment 1';
  addr=[];
}
