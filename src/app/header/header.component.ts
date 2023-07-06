import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // from parent to child
  @Input() userName : string = '';
  // from child to parent
  @Output() message = new EventEmitter();
  greetings : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitData() {
    this.message.emit(this.greetings);
  }

}
