import { Component, OnInit } from '@angular/core';    
import Swal from 'sweetalert2';
import { FitmeserviceService } from '../fitmeservice.service';

@Component({
  selector: 'app-create-diets',
  templateUrl: './create-diets.component.html',
  styleUrls: ['./create-diets.component.css']
})
export class CreateDietsComponent implements OnInit {
  dietCredential = {

    calorie : "",
    diets : "",
   
  }

  constructor(private fitmeService  : FitmeserviceService) { }

  ngOnInit(): void {
  }
  
  onCreate(){
    if(this.dietCredential.calorie==""||this.dietCredential.diets==""){
      Swal.fire("data-missing");
    }
    else
    {
    this.fitmeService.createDiet(this.dietCredential).subscribe(result => {
    console.log(result);
    this.dietCredential={
      calorie : " ",
    diets : " ",
    }
    Swal.fire("Done");
  });
  }
  }
}
