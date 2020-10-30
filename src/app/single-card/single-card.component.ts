import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

  @Input() selectedValue:any;
  @Input() listOfJobs:any;
  @Output() childEvent1= new EventEmitter();
  updatedJObs:any;
  message:any;
  selectedArray:String[]=[];
  filteredList:any = [];
 
  
  clear:any;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log("selected" ,this.selectedValue);

  }
  
  ngDoCheck(){
    debugger;
     console.log("On check")
     let value=this.selectedValue;
     this.pushValue(value);
     console.log(this.selectedArray); 
    }

    clearData($event){
      debugger;
    
      //this.selectedValue.remo
      let name=$event.target.name;
      let value=$event.target.value;
      /*
      var filtered = this.selectedValue.filter(function(el) { 

        if(el.name!=name ){
             el.option="delete";
            console.log(el);
        }
        return el.name != name;
       });
       */
      if(name == "clear"){
          this.selectedValue=["clear"];
      }else{
        let tempArr=[];
        for(let i=0;i<this.selectedValue.length;i++){   
         debugger; 
         console.log(this.selectedValue[i].name);
        if(this.selectedValue[i].name !== name || this.selectedValue[i].name == name){
          if(this.selectedValue[i].value !== value){
           console.log(this.selectedValue[i]);
           tempArr.push(this.selectedValue[i]);
          }
        }
        }
        this.selectedValue=tempArr;
      }
     
      this.clear=$event.target.name;
      console.log("NOw",$event);
      console.log("clearing ",this.selectedValue);
      this.childEvent1.emit(this.selectedValue);
    }
    
    pushValue(value){

this.selectedArray.push(value);
console.log(this.selectedArray);

    }
   

}
