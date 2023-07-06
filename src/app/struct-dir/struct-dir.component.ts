import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-dir',
  templateUrl: './struct-dir.component.html',
  styleUrls: ['./struct-dir.component.css']
})
export class StructDirComponent implements OnInit {

  constructor() { }

  sample : any;
  userNum : number = 13;
  friendList  = ['Syed', 'Josh', 'Nilofer', 'Imthiyas', 'Christy']; // string array
  singleObj =  {
    name : 'syed',
    age : 29,
    friendMate : 'school',
    role : 'trainer'
  }; // object
  jsonObj = [
    {
      name : 'syed',
      age : 29,
      friendMate : 'school'
    },
    {
      name : 'Josh',
      age : 30,
      friendMate : 'College'
    },
    {
      name : 'Nilofer',
      age : 28,
      friendMate : 'Tution'
    },
    {
      name : 'Christy',
      age : 29,
      friendMate : 'Shuttle'
    },
    {
      name : 'Imthiyas',
      age : 29,
      friendMate : 'Class'
    }
  ] // json

  ngOnInit(): void {
    for(let i = 0; i < this.jsonObj.length; i ++) {
      console.log(this.jsonObj[i].name);
    }
  }

}
