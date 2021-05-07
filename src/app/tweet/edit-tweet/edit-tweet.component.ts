import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/_models/tweet';
import { AccountService } from 'src/app/_services/account.service';
import { TweetsService } from 'src/app/_services/tweets.service';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css']
})
export class EditTweetComponent implements OnInit {
  tweet:Tweet;
  constructor(private accountService:AccountService,private tweetservice:TweetsService) {
    // this.accountService.currentUser$.pipe(take(1)).subscribe(t)
   }

  ngOnInit(): void {
  }

}
