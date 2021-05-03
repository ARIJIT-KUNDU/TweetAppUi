import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  getMembers(){
    return this.http.get<User[]>(this.baseUrl+'users/all');
  }
  getMember(loginid:string){
    return this.http.get<User>(this.baseUrl+'users/search'+loginid)
  }
}
