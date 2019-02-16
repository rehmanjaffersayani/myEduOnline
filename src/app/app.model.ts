export interface Quest{
    id: number,
    name:string
}

export interface QuestMarks{
    submitted: boolean,
    completion:number,
    mark:number
}


export interface UserQuest {
    user_id: number;
    quest_paths: [{
        order:number,
        quest:Quest,
        mark:QuestMarks
    }];
}

export interface User{
    id:number,
    fullname:string
}

export interface Response{
    status:boolean,
    message:string,
    data:any
}


