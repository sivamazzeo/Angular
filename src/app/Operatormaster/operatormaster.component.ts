import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  opername: string;
  operpass: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  // { opername: "admin", operpass: 'admin' }
]


@Component({
  selector: 'app-operatormaster',
  templateUrl: './operatormaster.component.html',
  styleUrls: ['./operatormaster.component.css']
})
export class OperatormasterComponent implements OnInit {

  periodicElement: any[] = []

  // from parent to child
  @Input() userName: string = '';
  // from child to parent
  @Output() message = new EventEmitter();
  greetings: string = '';
  displayedColumns: string[] = ['opername', 'operpass'];
  dataSource = [...ELEMENT_DATA];
  // dataSource = new ExampleDataSource(this.dataToDisplay);

  operatorname: any
  operatorpass: any

  constructor() { }

  ngOnInit(): void {
  }

  emitData() {
    this.message.emit(this.greetings);
  }

  onAdd() {
    // this.periodicElement = []
    let map = {
      opername: this.operatorname,
      operpass: this.operatorpass
    }

    this.dataSource = [...this.dataSource, map];    
  }
  onClear(){
    this.operatorname=""
    this.operatorpass=""
    this.dataSource=[]
  }
}
