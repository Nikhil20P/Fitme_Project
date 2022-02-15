import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {FitmeserviceService} from '../fitmeservice.service';

@Component({
  selector: 'app-create-gymplan',
  templateUrl: './create-gymplan.component.html',
  styleUrls: ['./create-gymplan.component.css']
})
export class CreateGymplanComponent implements OnInit {


gymplanCri={
  name:"",
  duration:""
}


  constructor(private gymservice:FitmeserviceService) { }

  ngOnInit(): void {
    
  }

  onCreate(){
    if(this.gymplanCri.name=="" || this.gymplanCri.duration==""){
      Swal.fire("Data-missing");

    }
    else{
    
    this.gymservice.creategymplan(this.gymplanCri).subscribe(result => {
    console.log(result);
    this.gymplanCri = {

      name : " ",
      duration : " "
     
    }
    Swal.fire("Done");
  
  });
  }
}



}
