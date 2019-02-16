import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
import {Quest,User,QuestMarks,UserQuest} from '../app.model'
import { CommonService } from '../service/common.service';
import { Observable } from 'rxjs';
import { NotificationService } from '../service/notification.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
 
  displayedColumns: string[] = ['Question','Submitted','Completed','Marks'];
  subscription: BehaviorSubject<any>;

  private eventsSubscription: any
  @Input() events: Observable<void>;

  _data : UserQuest[];
  _raw : UserQuest[];
  
  constructor(
    private _service:CommonService,
    private _notify : NotificationService
  ) { }

  ngOnInit() {
   

   
    this.eventsSubscription = this.events.subscribe( event => {
      this.dataUpdated(event)
    });
  }
  ngAfterViewInit() {
    
    this.subscription = this._service.getUserQuestJson().
    subscribe(message => { 
     
      this._raw = message.data; });

    
  }
  

  dataUpdated(value){
    
    this._notify.open('User Fetched')
   
    this._data=this._raw.filter(x=>x.user_id == value)[0]['quest_paths'];
  
  }


}
