import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { RegisterComponent } from './register/register.component';
import { RoutingExComponent } from './routing-ex/routing-ex.component';
import { StructDirComponent } from './struct-dir/struct-dir.component';
import { ActivateGuard } from './guard/activate.guard';
import { DeactivateGuard } from './guard/deactivate.guard';
import { ChildGuaGuard } from './guard/child-gua.guard';
import { LazyGuard } from './lazyload/lazy.guard';
import { ReportComponent } from './Report/report.component';
import { ProductlistComponent } from './ProductList/productlist.component';
import { OperatormasterComponent } from './Operatormaster/operatormaster.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canDeactivate: [DeactivateGuard]
  },
 
  {
    path: 'reg',
    component: RegisterComponent,
    canActivate: [ActivateGuard],
    canActivateChild: [ChildGuaGuard],
    children: [
      {
        path: 'report',
        canActivate: [ActivateGuard],
        component: ReportComponent
      },
      {
        path: 'routeEx',
        component: RoutingExComponent
      },
      {
        path: 'directive',
        component: StructDirComponent
      },
      {
        path: 'pipe',
        component: PipesComponent
      },
      {
        path: 'productlist',
        component: ProductlistComponent
      },
      {
        path: 'operatormaster',
        component: OperatormasterComponent
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./lazyload/lazyload.module').then((m) => m.LazyloadModule),
    canLoad: [LazyGuard] // way to load the lazyloaded module
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
