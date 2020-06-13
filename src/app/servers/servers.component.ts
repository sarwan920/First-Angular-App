import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 number=0
  constructor() {
   
  
  
   }
   onReset(){
     this.number=0;
   }

   onServerCreation(){
     this.number++;
   }

  ngOnInit(): void {
  }

}
