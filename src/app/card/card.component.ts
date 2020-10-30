import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import {JobSelectedDetail} from './JobSelectedDetail';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() listOfJobs:any;
  @Output() childEvent= new EventEmitter();
  jobSelected:JobSelectedDetail;
 
  objectKeys = Object.keys;
  constructor() { }

  ngOnInit(): void {
   // console.log(this.listOfJobs);
  }
  getButton($event,item){

    let name=$event.target.name;
    let value=$event.target.value;
    console.log($event);
    this.jobSelected = {
      name:name,
      value:value,
      option:"add"

    }  
    this.childEvent.emit(this.jobSelected);
  }
  ngDoCheck(){
    console.log("FRom Card" , this.listOfJobs);

    

  }

}
