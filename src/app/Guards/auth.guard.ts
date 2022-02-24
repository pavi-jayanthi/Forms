import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { AuthService } from '../Service/auth.service';
//import { Observable } from 'rxjs';
import { NotificationService } from '../Service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private notifyService: NotificationService){}
  canActivate() : boolean{
    if(this.auth.islogged()){
      return true;
      }else{
        this.notifyService.showWarning('You need to login to visit this page','');
        return false;
  }

  }
  
}
