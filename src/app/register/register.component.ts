import { Component, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { CoolLocalStorage } from '@angular-cool/storage';
import { CoolSessionStorage } from '@angular-cool/storage';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../share.service';
import { StructDirComponent } from '../struct-dir/struct-dir.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterContentChecked {

  currUser : any = '';
  currentUser : any = '';
  routeParam : any = ''
  childMsg :  string = '';

  // to access even the global variables and business logics of chils
  @ViewChild(StructDirComponent) directive = new  StructDirComponent();

  constructor(private local : CoolLocalStorage,
              private session : CoolSessionStorage,
              private active : ActivatedRoute,
              private share : ShareService) { }
  
  ngOnInit(): void {
    this.share.print('register');
    this.currUser = this.local.getItem('uname');
    this.currentUser = this.session.getItem('uname');
    console.log('hi am a data from session storage', this.currentUser);
    // this.active.params.subscribe(data => {
    //   this.routeParam = atob(data['username']);
    // });
  }

  ngAfterContentChecked(): void {
    // this.directive.sample = 8;
  }

  receiveData(data : any) {
    // this.childMsg = data;
  }
}
