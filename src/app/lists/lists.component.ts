import { Component, OnInit } from '@angular/core';
import { MembersService } from '../_services/members.service';
import { Tweet } from '../_models/tweet';
import { User } from '../_models/user';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  members:Partial<User[]>;
  predicate='liked';
  constructor(private memberService:MembersService) { }

  ngOnInit(): void {
    this.loadLikes();
  }
  loadLikes(){
    this.memberService.getLikes(this.predicate).subscribe(response=>{
      this.members=response;
    })
  }
}
