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
     this.ServerStatus="Server has been Created with name   "+this.serverName;
   }

   
  ngOnInit(): void {
  }

}
