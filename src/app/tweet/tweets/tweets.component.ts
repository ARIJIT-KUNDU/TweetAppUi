import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user';
import { MembersService } from '../../_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../_models/tweet';
import { TweetsService } from '../../_services/tweets.service';
import { AccountService } from '../../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @Input() member: User;
  tweets: Tweet[];
  loginId:string;
  submitted:boolean;
  addCommentForm:FormGroup;
  tweetResult:any;
  user:any;
  comments:any;
  displayNoCommentsData:string;
  constructor(private memberService: MembersService, private route: ActivatedRoute, private tweetService: TweetsService, private toastr: ToastrService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loadMember();
    this.loadTweet();
    this.loginId=JSON.parse(localStorage.user).loginId;
    console.log(this.loginId);
    this.initializeAddCommentForm();
  }
  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('loginid')).subscribe(member => {

      this.member = member;
      console.log(member);
    })
  }
  loadTweet() {
    this.tweetService.getTweets(this.member.id).subscribe(tweets => {
      this.tweets = tweets;
      console.log(this.tweets);
    })
  }
  addLike(tweet: Tweet) {
    this.memberService.addLike(tweet.id).subscribe(() => {
      this.toastr.success('You have liked this tweet');
    })
  }
  initializeAddCommentForm(){
    this.addCommentForm=this.fb.group({
      comments:['',Validators.required],
      tags:['']
    })
  }
  addComments(tweetId:number){
    const loginId=localStorage.getItem("user")==null?"":JSON.parse(localStorage.getItem("user")).loginId;
    this.submitted=true;
    if(this.addCommentForm.invalid){
      return;
    }
    const userComment={
      tweetId:tweetId,
      comment:this.addCommentForm.value.comments,
      tag:this.addCommentForm.value.tags,
      username:loginId
    }
    
    this.tweetService.addComment(userComment,userComment.username).subscribe(()=>this.getTweetById(tweetId))
  }
  private getTweetById(tweetId : number)
  {
    const userId = JSON.parse(localStorage.getItem("user")).loginId;
    this.tweetService.getTweetById(tweetId, userId ).subscribe(data=>
    {
        this.tweetResult = data;  
        
        this.memberService.getMember(this.tweetResult.userId).subscribe(data=>
        {
            this.user = data;
            
        });  
        // this.tweetService.getTweetLikesById(tweetId).subscribe(data =>
        // {
        //     this.likes = data;
            
        //     var isPresent = this.likes.some(function(el : any){ 
        //       return el.userId === userId
        //     });
        //     if(isPresent == true)
        //     {
        //       this.liked = true;
        //     }
        //     else{
        //       this.liked = false;
        //     }
        //     console.log(isPresent);
        // });

        this.tweetService.getTweetCommentsById(tweetId).subscribe(data=>
        {
            this.comments = data; 
            console.log(this.comments.length);
            if(this.comments.length > 0)
            {
              this.displayNoCommentsData = "true";
            }
            else{
              this.displayNoCommentsData = "false"
            }
        });                                                                                                                                                                                                                                                           
    });
  }
}
