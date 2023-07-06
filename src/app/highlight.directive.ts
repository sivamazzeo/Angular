import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private ele : ElementRef) { }

  // one way of data communication b/w the components
  @Input() value : any;

  ngOnInit(): void {
    this.ele.nativeElement.style.border = '2px solid blue';
  }

  @HostListener('keyup') onkeyUp() {
    if(this.value && this.value > 10){
      this.ele.nativeElement.style.backgroundColor = 'red';
    } else {
      this.ele.nativeElement.style.backgroundColor = '';
    }
  }

}
