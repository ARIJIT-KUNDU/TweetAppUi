export interface Tweet{
    id:string;
    commentsCount:number;
    message:string;
    tag?:string;
    createdOn:Date;
    appUserId:number;
    replies?:Tweet[]
}