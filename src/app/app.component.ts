import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    let lang:any=localStorage.getItem('lang');
    if(lang){
      translate.use(lang);
      if(lang=='ar'){
        document.getElementsByName('html')[0]?.setAttribute('dir','rtl')
        document.getElementsByName('html')[0]?.setAttribute('lang','ar')
      }else{
        document.getElementsByName('html')[0]?.setAttribute('dir','ltr') 
        document.getElementsByName('html')[0]?.setAttribute('lang','en')
      }
    }else{
      translate.use('ar');
      document.getElementsByName('html')[0]?.setAttribute('dir','rtl')
      document.getElementsByName('html')[0]?.setAttribute('lang','ar')
    }
  }
}
