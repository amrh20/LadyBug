import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();

@Component({
  selector: 'app-pages-head',
  templateUrl: './pages-head.component.html',
  styleUrls: ['./pages-head.component.scss']
})
export class PagesHeadComponent implements OnInit {
  token:any=localStorage.getItem('_token');
 decodedToken :any= helper.decodeToken(this.token);
  user:any=localStorage.getItem('_user');
  UserData:any={};
  constructor() { }

  ngOnInit(): void {
    this.UserData=JSON.parse(this.user)
  }

}
