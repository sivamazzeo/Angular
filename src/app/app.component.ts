import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'batch_three';

  ngOnInit() {
    if(environment.name == 'qa'){
      console.log('Am running on QA');
    }
  }
  
}
