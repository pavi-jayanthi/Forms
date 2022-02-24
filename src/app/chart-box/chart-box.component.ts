import { Component, OnInit,DoCheck} from '@angular/core';

@Component({
  selector: 'app-chart-box',
  templateUrl: './chart-box.component.html',
  styleUrls: ['./chart-box.component.css']
})
export class ChartBoxComponent implements OnInit,DoCheck {

  constructor() { }
  recivedData:any
  ngOnInit(): void {
    let data=localStorage.getItem(JSON.stringify(localStorage.getItem('logged-User')))
      if(data!==null){
      let inboxData=JSON.parse(data)
      this.recivedData=inboxData[0].recievedMail
      }
  }
  ngDoCheck(): void{
    let alerts=this.recivedData.length
    localStorage.setItem('alerts',JSON.stringify(alerts))
  }
  }
