import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../Service/notification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router,private notifyService : NotificationService) { }

  ngOnInit(): void {
  }
  regForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required]),
    //Validators.pattern('^[A-Za-z]+$')
  })
  get email(){
    return this.regForm.get('email')
  }
  get password(){
    return this.regForm.get('password')
  }

  validate(){
    if(localStorage.getItem(JSON.stringify(this.regForm.value.email))===null){
      let datainfo=[{
        recievedMail: [],
        sentMail: [],
        user: this.regForm.value
        }]
      localStorage.setItem(JSON.stringify(this.regForm.value.email),JSON.stringify(datainfo))
      this.notifyService.showSuccess('','Successfully Registered')
      this.router.navigate(['login'])
    }else{
      this.notifyService.showError('','user Already exists')
    }
  }
  nav_login(){
    this.router.navigate(['login'])
  }
}
