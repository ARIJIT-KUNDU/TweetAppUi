import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tweet } from '../_models/tweet';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  getTweets(memberId:number){
    return this.http.get<Tweet[]>(this.baseUrl+'tweets/'+memberId);
  }
  addTweet(tweet:any,id:number){
    return this.http.post(this.baseUrl+'tweets/'+id+'/add',tweet).pipe(
      map(data1=>data1=JSON.parse(JSON.stringify(data1)))
    );
  }
  public addComment(userComment:any,username:string){
    
    return this.http.post(this.baseUrl+'tweets/'+username+'/reply/'+userComment.tweetId,userComment).pipe(
      map(data1=>data1=JSON.parse(JSON.stringify(data1)))
    )
  }
  public getTweetById(tweetId:number,loginId:string){
    return this.http.get(this.baseUrl+"tweetById/"+tweetId+"/usserId/"+loginId);
  }
  public getTweetCommentsById(tweetId : number)
  {
    return this.http.get(this.baseUrl + "tweetCommentsById/" + tweetId);
  }
}
