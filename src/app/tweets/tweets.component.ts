import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @Input() member:User;
  constructor() { }

  ngOnInit(): void {
  }

}
