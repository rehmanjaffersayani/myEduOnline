import { Component, OnInit,AfterViewInit } from '@angular/core';

import { CommonService } from '../service/common.service';
import {Quest,User,QuestMarks,UserQuest} from '../app.model'
import { Subject } from 'rxjs';
import { NotificationService } from '../service/notification.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  private _selectedUser: Subject<void> = new Subject<void>();
  subscription: Subject<any>;
  private _users: User[];

  constructor(
    private _service : CommonService,
    private _notify:NotificationService
  ) { }

  ngOnInit() {

    this._service.getAllUser();

  }
  ngAfterViewInit(){
    this.subscription = this._service.getUserJson().
    subscribe(message => { 
     
      if(message){
      
      if(message.status){
   
        this._users = message.data;
      }
      else
     console.log(message.message)
        this._notify.open(message.message)
     } else{
      console.log("Unable to parse JSON Data. Something went wrong")
     this._notify.open("Unable to parse JSON Data. Something went wrong");
     }
    });

  }
  
  userSelected($event) {
    
    this._selectedUser.next($event.value)
  }

 

}
