import { Component, Inject, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {

  ELEMENT_DATA : any=[];
  ELEMENT_DATA_TRAINER : any=[];
  data:any;

  constructor(private fitmeService : FitmeserviceService,
    public dailogRef:MatDialogRef<MemberUpdateComponent>,
    private router :Router,@Inject(MAT_DIALOG_DATA) public data1:any) { }

    memberCredential:any = {

      status: "",
      name : "",
      email : "",
      mobileNumber : "",
      address : "",
      gender :"",
      height : "",
      weight :"",
      age : "",
      gymplan:"",
      joiningDate : ""
    };


  ngOnInit(): void {
    this.fitmeService.getMemberById(this.fitmeService.memberId).subscribe(data1=>
      {
        console.log(data1);
        this.memberCredential=data1;
      });
  }

  
  onCreate(memberId:any){
    this.fitmeService.updatemember(this.memberCredential).subscribe(result => {
    console.log(result);
    this.memberCredential = {

      status: "",
      name : " ",
      email : " ",
      mobileNumber : " ",
      address : " ",
      gender :" ",
      height : " ",
      weight :" ",
      age : " ",
      gymplan:"",

      joiningDate : " "
    };
    this.dailogRef.close("success");
  });
}

close(){
  this.dailogRef.close(true);
}
  
  

}
