export interface Tweet{
    id:number;
    commentsCount:number;
    message:string;
    tag?:string;
    createdOn:Date;
    appUserId:number;
}