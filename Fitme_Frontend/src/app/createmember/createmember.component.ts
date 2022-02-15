import { Component, OnInit } from '@angular/core';
import {FitmeserviceService} from '../fitmeservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-createmember',
  templateUrl: './createmember.component.html',
  styleUrls: ['./createmember.component.css']
})
export class CreatememberComponent implements OnInit {

  ELEMENT_DATA : any=[];
  ELEMENT_DATA_TRAINER : any=[];


  memberCredential = {

    status: "",
    name : "",
    email : "",
    mobileNumber : "",
    address : "",
    gender :"",
    height : "",
    weight :"",
    age : "",
    gymplan: "",
    joiningDate : ""
  };



  constructor(private fitmeservice : FitmeserviceService) { }

  ngOnInit(): void {
    
    
  }

  onCreate(){

     if(this.memberCredential.name=="" || this.memberCredential.address=="" || this.memberCredential.age=="" || this.memberCredential.email=="" || this.memberCredential.gymplan=="" || this.memberCredential.gender=="" || this.memberCredential.height=="" || this.memberCredential.joiningDate=="" || this.memberCredential.mobileNumber=="" || this.memberCredential.status=="" || this.memberCredential.weight=="")
{
  Swal.fire("Please Fill Required Fields");
}
else
{
    this.fitmeservice.createMember(this.memberCredential).subscribe(result => {
    console.log(result);
    this.memberCredential = {

      status: " ",
      name : " ",
      email : " ",
      mobileNumber : " ",
      address : " ",
      gender :" ",
      height : " ",
      weight :" ",
      age : " ",
      gymplan: " ",
      joiningDate : " "
    };
    Swal.fire("Success!!");
    

  });
}
}




}
