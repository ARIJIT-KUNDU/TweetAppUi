import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../_models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  getTweets(memberId:number){
    return this.http.get<Tweet[]>(this.baseUrl+'tweets/'+memberId);
  }
  addTweet(message:string,id:number){
    return this.http.post(this.baseUrl+'tweets/'+id+'/add',message);
  }
}
