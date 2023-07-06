import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  print(comp : string){
    // your own logic
    console.log('Yes am share by the component '+comp);
  }
}
