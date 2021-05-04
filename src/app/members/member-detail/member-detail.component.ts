import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { MembersService } from 'src/app/_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Tweet } from 'src/app/_models/tweet';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member:User;
  model:any={};
  tweets:Tweet[];
  constructor(private memberService:MembersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();
  }
  loadMember(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('loginid')).subscribe(member=>{
      this.member=member;
    })
  }
  post(){

  }
  getTweets(memberId:number){
    
  }

}
