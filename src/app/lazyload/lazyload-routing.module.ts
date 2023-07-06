import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazycompComponent } from './lazycomp/lazycomp.component';

const routes: Routes = [
  {
    path : 'lazy',
    component : LazycompComponent
    //canLoad : [LazyGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadRoutingModule { }
