import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
    if(this._route.url.includes('/posts')){
      this.type='posts';
    }else if(this._route.url.includes('/Product')){
      this.type='Product';
    }else if(this._route.url.includes('/farmed-blog')){
      this.type='farmed-blog';
    }else if(this._route.url.includes('/farmer')){
      this.type='farmer';
    }
  }
  logOut=()=>{
    localStorage.removeItem('_token')
    this._route.navigate(['/auth/login'])
  }
  type:any='';
  toggle(TYPE:any){
    this.type=TYPE == this.type?'':TYPE;
  }
}
