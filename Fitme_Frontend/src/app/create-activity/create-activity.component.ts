import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FitmeserviceService } from '../fitmeservice.service';


@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  activityCredential={
    day: "",
    workouts:""

  }

  constructor(private fitmeService  : FitmeserviceService) { }

  ngOnInit(): void {
  }
  onCreate(){

if(this.activityCredential.day=="" || this.activityCredential.workouts==""){
  Swal.fire("data_missing");
}
else{



    this.fitmeService.createActivity(this.activityCredential).subscribe(result => {
    console.log(result);
    this.activityCredential={
      day: " ",
      workouts:" "

  
    }
    Swal.fire("Done");
  });
  }
}

}
