import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Constants } from '../constants';
import {Quest,User,QuestMarks,UserQuest,Response} from '../app.model'


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private userUrl: string;
  private questionUrl: string;

  private _jsonUser = new BehaviorSubject([]);
  private _jsonUserQuest = new BehaviorSubject([]);

  // _userObs = this._jsonUser.asObservable();
  // _userQuestObs = this._jsonUserQuest.asObservable();
  

  constructor(private http: HttpClient, private constants :Constants) { 
    this.userUrl = constants.server + constants.userJson;
    this.questionUrl = constants.server + constants.quesJson;
  }



  public getAllUser() {
    this.http.get<Response[]>(this.userUrl).subscribe(userData => {
      this.http.get<Response[]>(this.questionUrl).subscribe(questData => {
        
        this.setUserJson(userData);
        this.setUserQuestJson(questData);
      });
    });
  }


 

  getUserJson() : Observable<any> {
    return this._jsonUser.asObservable();
  }

  setUserJson(data: Response[]) {

    this._jsonUser.next(data)
  
  }

  getUserQuestJson() : Observable<any> {
   return this._jsonUserQuest.asObservable();
  }

  setUserQuestJson(data: Response[]) {

    this._jsonUserQuest.next(data)
  }

}
