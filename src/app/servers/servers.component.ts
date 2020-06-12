import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreation="No Server Exists";
  constructor() {
   
    setTimeout(()=>{
      this.allowNewServer=true;
     
    },2000);
  
   }

   onServerCreation(){
     this.serverCreation="Server Created!";
   }

  ngOnInit(): void {
  }

}
