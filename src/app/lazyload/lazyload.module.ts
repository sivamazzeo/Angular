import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LazyloadRoutingModule } from './lazyload-routing.module';
import { LazycompComponent } from './lazycomp/lazycomp.component';


@NgModule({
  declarations: [
    LazycompComponent
  ],
  imports: [
    CommonModule,
    LazyloadRoutingModule,
    FormsModule
  ]
})
export class LazyloadModule { }
