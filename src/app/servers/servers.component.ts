import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 ServerStatus="No Server";
 serverName="TestServer";
 serverCreated=false;
 servers=['server1', 'server2'];

 name:string="";
  constructor() {
   
  
   }

   

  //  clickReset(){
  //    this.name="";
  //  }

   
   
 
   onUpdateServerName(event:Event) {
     this.serverName=(<HTMLInputElement>event.target).value;


   }
   

   onServerCreation(){
     this.serverCreated=true;
     this.servers.push(this.serverName);
     this.ServerStatus="Server has been Created with name   "+this.serverName;
   }

   
  ngOnInit(): void {
  }

}
