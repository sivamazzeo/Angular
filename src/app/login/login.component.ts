import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from '@angular-cool/storage';
import { CoolSessionStorage } from '@angular-cool/storage';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // global
  username : string = '';
  pwd : string = '';
  defaultName : string = 'Buddy';
  validated : boolean = true;
  num : number = 0;
  flexi : any;
  styleprop : string = "grey";
  arr = [];
  jsonObj = [
    {
      name : 'michael',
      role : 'Sr.Trainer',
      age : 29
    },
    {
      name : 'syed',
      role : 'Sr.Trainer',
      age : 32
    },
    {
      name : 'Joshua',
      role : 'Trainer',
      age : 24
    }
  ]
  roles = ['customer', 'admin', 'new user'];
  currentRole : string = 'Select Role';

  // place to create the instances for the imported package
  constructor(private local : CoolLocalStorage,
              private session : CoolSessionStorage,
              private route : Router,
              private share : ShareService) { }

  // it will get triggered during load time of the comp
  ngOnInit(): void {
    this.share.print('login');
    const obj : Partial<sampleObj> = {
      name : 'shasruta',
      role : 'Sr.Trainer',
      age : 29
    };
    delete obj['age'];
    console.log('3rd file');
  }

  display() {
    let localVar = 'Hi am a local variable';
    console.log('This is an json obj',this.jsonObj);
    for(let i =0; i < this.jsonObj.length; i++){
      if(this.jsonObj[i].name == 'shasruta'){
         this.jsonObj[i].age = 28;
      } else {
        // particular key can't be added/deleted in a json
        delete this.jsonObj[i];
      }
    }
    console.log(this.jsonObj);
  }

  validate() {
    if(this.username && this.pwd && this.currentRole){
      this.local.setItem('uname', this.username);
      this.session.setItem('uname', this.username);
      this.session.setObject('obj',{name : 'x'});
      this.session.setItem('role', this.currentRole);
      this.validated = true;
      this.styleprop = 'grey';
      if(this.username == 'shasruta' || this.username == 'shankar'||this.username == 'michael'||this.username =='siva'){
        this.session.setItem('aunthenticated', 'true');
        let encryptUser = btoa(this.username);
        this.route.navigateByUrl('reg');
        // this.route.navigateByUrl('reg/'+encryptUser);
      } else {
        this.session.setItem('aunthenticated', 'true');
      }
    } else {
      this.validated = false;
      this.styleprop = 'red';
    }
      
  }


  validate_report() {
    if(this.username && this.pwd && this.currentRole){
      this.local.setItem('uname', this.username);
      this.session.setItem('uname', this.username);
      this.session.setObject('obj',{name : 'x'});
      this.session.setItem('role', this.currentRole);
      this.validated = true;
      this.styleprop = 'grey';
      if(this.username == 'shasruta' || this.username == 'shankar'||this.username == 'michael'){
        this.session.setItem('aunthenticated', 'true');
        let encryptUser = btoa(this.username);
        console.log('reg/'+encryptUser+'/report')
        
        this.route.navigateByUrl('reg/report');
      } else {
        this.session.setItem('aunthenticated', 'true');
      }
    } else {
      this.validated = false;
      this.styleprop = 'red';
    }
      
  }

}

interface sampleObj {
  name : string,
  role : string,
  age : number
}