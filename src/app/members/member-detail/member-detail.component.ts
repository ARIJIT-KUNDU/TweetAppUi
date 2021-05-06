import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { MembersService } from 'src/app/_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from 'src/app/_models/tweet';
import { TweetsService } from 'src/app/_services/tweets.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member:User;
  model:Tweet;
  tweets:Tweet[];
  constructor(private memberService:MembersService,private route:ActivatedRoute,private tweetService:TweetsService) { }

  ngOnInit(): void {
    this.loadMember();
  }
  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('loginid')).subscribe(member=>{
      
      this.member=member;
    })
  }
  post(newTweet:Tweet){
    this.tweetService.addTweet(newTweet.message,newTweet.appUserId).subscribe(result=>{
      console.log(result);
    })
  }
  getTweets(memberId:number){
    
  }

}
