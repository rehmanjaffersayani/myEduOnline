import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public server = 'http://localhost:8888/api/?file=';//'http://raw.githubusercontent.com/myedapp/developer-coding-test/master/';
    public quesJson = "quest_pathways.json";
    public userJson = "users.json";
    
}