import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 ServerStatus="No Server";
 serverName="";
  constructor() {
   
  
   }

   onUpdateServerName(event:Event) {
     this.serverName=(<HTMLInputElement>event.target).value;

   }
   

   onServerCreation(){
     this.ServerStatus=this.serverName;
   }

   
  ngOnInit(): void {
  }

}
