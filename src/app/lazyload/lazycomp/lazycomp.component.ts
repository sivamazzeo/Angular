import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazycomp',
  templateUrl: './lazycomp.component.html',
  styleUrls: ['./lazycomp.component.css']
})
export class LazycompComponent implements OnInit {

  constructor() { }

  formData = {
    username : '',
    email : '',
    newpassword : '',
    confirmPwd : ''
  }

  ngOnInit(): void {
  }

  saveDetails() {
    // console.log(this.formData);
    alert("User Saved Saved Succesfully...!")
  }

}
