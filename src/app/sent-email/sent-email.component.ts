import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../Service/notification.service';

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent implements OnInit {

  
  constructor(private notifyService: NotificationService) { }
  recivedData:any
  ngOnInit(): void {
    let data=localStorage.getItem(JSON.stringify(localStorage.getItem('logged-User')))
  if(data!==null){
  let inboxData=JSON.parse(data)
  this.recivedData=inboxData[0].sentMail
  }
  }

}
