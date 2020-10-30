import { Component, OnInit,Input } from '@angular/core';
import { exit } from 'process';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() listOfJobs:any;
  updatedJObs:any;
  message:any;
  perviousState:any[];
  newState:[];
  selectorArr:any=[];
  filteredSelector:any=[];
  filteredList:any = [];
  clear:any=[];
  getTrue:boolean=false;
  constructor() {
    
   }

  ngOnInit(): void {
      console.log("From The main Compo")
      console.log(this.listOfJobs);
      console.log(this.message);
      this.updatedJObs=this.listOfJobs;
  }

  
 ngDoCheck(){
   //debugger;
    console.log("On check")
    console.log(this.message);
    this.filteredList=[];
    if (this.clear.length > 0 && !this.message){
      
      if(this.clear.length == 1 && this.clear == 'clear'){
        this.message=undefined;
        this.updatedJObs=this.listOfJobs;
        this.clear='';
        this.selectorArr=[];
        this.getTrue=false;
      }
      else {
        this.filterBasedOnValue(this.clear,this.message);
        this.updatedJObs=this.filteredList;
        this.selectorArr=this.clear;
        this.clear=[];
      }
    }else if( this.message && this.clear.length >=0 ){  
        this.getTrue=true;
        let index=Object.values(this.message).indexOf('add');
        if(index >-1){this.getFilteredResults(this.message);
        this.updatedJObs=this.filteredList; }
       
    }
    else{
      this.updatedJObs=this.listOfJobs;
      this.getTrue=false;
    }
     
 }

 filterBasedOnValue(selected,message){
   console.log("Filtered Value from single card",selected);
   debugger;
  
   console.log("value", selected);
   this.perviousState=this.listOfJobs;
     for(let item of this.clear){
      let name= item["name"];
      let value=item["value"];
      
     this.filterSelectors(name,value);
     let arr={"name":name,"value":value};
     console.log("Seletor:" , arr);
      this.selectorArr.push(arr);

     }
   
}

filterSelectors(name,value){
  
   this.filteredList=[];
  //debugger;
  for(const iterator of this.perviousState){
   console.log(iterator);

   for (var key in iterator) {
         
    let value1 = iterator[key];
    if(key == name){
      if(Array.isArray(value1)){
          if(value1.includes(value)){
            this.filteredList.push(iterator);
            break;
          }
        
      }else if(iterator[key] == value){
        this.filteredList.push(iterator);
        break;
      }   
    }

}
  }

  this.perviousState=this.filteredList;

}

 getFilteredResults(selectedJOb){
   //debugger;
   if(selectedJOb){
     let name=selectedJOb.name;
     let value=selectedJOb.value;
      this.selectorArr.push(selectedJOb);
     console.log(this.selectorArr);
     debugger;
    for (const iterator of this.updatedJObs) {

        for (var key in iterator) {
         
          let value1 = iterator[key];
          if(key == name){
            if(Array.isArray(value1)){
                if(value1.includes(value)){
                  this.filteredList.push(iterator);
                  break;
                }
              
            }else if(iterator[key] == value){
              this.filteredList.push(iterator);
              break;
            }   
          }
      
      }
      console.log(this.filteredList);
    }
   }

     console.log("From")
    
     this.message='';

 }

 }


 
