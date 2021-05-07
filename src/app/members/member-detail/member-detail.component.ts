import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { MembersService } from 'src/app/_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from 'src/app/_models/tweet';
import { TweetsService } from 'src/app/_services/tweets.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member:User;
  model:any={};
  tweets:Tweet[];
  newTweetForm:FormGroup;
  constructor(private memberService:MembersService,private route:ActivatedRoute,private tweetService:TweetsService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadMember();
    this.initializeForm();
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
  initializeForm(){
    this.newTweetForm=this.fb.group({
      message:['',[Validators.required,Validators.maxLength(144)]],
      tag:['',Validators.maxLength(50)]
    })
  }

}
