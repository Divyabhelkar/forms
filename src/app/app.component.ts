import { Component, OnInit } from '@angular/core';  
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})  
export class AppComponent implements OnInit {  
  
  firstName1="Divya" 
//FormBuilder
BusTicket =this.fb.group({
  firstName:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')])],
  lastName:['',[Validators.required,Validators.maxLength(9)]],
  address:this.fb.group({
    cityName:['',Validators.required],
    stateName:['',Validators.compose([Validators.required,Validators.maxLength(12),Validators.minLength(2)])],
    zipcode:['']
  })
})

constructor(private fb:FormBuilder){}
ngOnInit(){}

get firstName(){return this.BusTicket.get('firstName');}
get lastName(){return this.BusTicket.get('lastName');}
get cityName(){return this.BusTicket.get('address.cityName');}
get stateName(){return this.BusTicket.get('address.stateName');}

onSubmit(){ console.warn(this.BusTicket.value);}

}  
 