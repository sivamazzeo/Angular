import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  name : string = 'shAsRutA';
  todayDate : Date = new Date();
  money : number = 1502800;
  mark : number = 54;
  decimalNum : number = 35;
  fruits = ['apple', 'mango', 'grapes', 'Guava', 'Berry'];
  employeeList = ['Shasruta', 'Syed', 'Joshua', 'John', 'Dona Nittisha', 'Imthiyas', 'Nilofer'];
  searchTxt : string = '';

  ngOnInit(): void {
  }

}
