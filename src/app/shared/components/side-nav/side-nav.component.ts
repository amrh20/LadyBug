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
  }
  logOut=()=>{
    localStorage.removeItem('_token')
    this._route.navigate(['/auth/login'])
  }
}
