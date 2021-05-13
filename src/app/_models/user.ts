import { Tweet } from './tweet';

export interface User{
    id?:number;
    firstname:string;
    lastname:string;
    email:string;
    loginid:string;
    password:string;
    contactnumber:string;
    tweets?:Tweet[];
}