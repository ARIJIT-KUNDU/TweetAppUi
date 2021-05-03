import { Tweet } from './tweet';

export interface User{
    firstname:string;
    lastname:string;
    email:string;
    loginid:string;
    password:string;
    contactnumber:number;
    tweets:Tweet[];
}