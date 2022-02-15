import { Component, Inject, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.css']
})
export class ActivityUpdateComponent implements OnInit {

  ELEMENT_DATA : any=[];
  data:any;

  constructor(private fitmeService : FitmeserviceService,
    public dailogRef:MatDialogRef<ActivityUpdateComponent>,
    private router :Router,@Inject(MAT_DIALOG_DATA) public data1:any) { }
    
    
    activityCredential:any={
      day: "",
      workouts:""
  
    }

  ngOnInit(): void {
    this.fitmeService.getActivityById(this.fitmeService.id).subscribe(data1=>
      {
        console.log(data1);
        this.activityCredential=data1;
      });
  
    }
    close(){
      this.dailogRef.close(true);
    }

    onCreate(id:any){
       
    

      this.fitmeService.updatActivity(this.activityCredential).subscribe(result => {
      console.log(result);
      this.activityCredential = {
        day : " ",
        workouts : " ",
      }
      this.dailogRef.close("success");
    });
    }

}
