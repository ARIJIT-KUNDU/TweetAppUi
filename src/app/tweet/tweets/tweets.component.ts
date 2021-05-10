import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user';
import { MembersService } from '../../_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from '../../_models/tweet';
import { TweetsService } from '../../_services/tweets.service';
import { AccountService } from '../../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @Input() member: User;
  tweets: Tweet[];
  loginId:string;
  constructor(private memberService: MembersService, private route: ActivatedRoute, private tweetService: TweetsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadMember();
    this.loadTweet();
    this.loginId=JSON.parse(localStorage.user.loginId);
    console.log(this.loginId);
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
    })
  }
  addLike(tweet: Tweet) {
    this.memberService.addLike(tweet.id).subscribe(() => {
      this.toastr.success('You have liked this tweet');
    })
  }
}
