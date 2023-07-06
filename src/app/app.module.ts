import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CoolStorageModule } from '@angular-cool/storage';
import { RegisterComponent } from './register/register.component';
import { RoutingExComponent } from './routing-ex/routing-ex.component';
import { StructDirComponent } from './struct-dir/struct-dir.component';
import { HighlightDirective } from './highlight.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './filter.pipe';
import { HeaderComponent } from './header/header.component';
import { ReportComponent } from './Report/report.component';
import { MatTableModule } from '@angular/material/table';
import { ProductlistComponent } from './ProductList/productlist.component';
import { OperatormasterComponent } from './Operatormaster/operatormaster.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RoutingExComponent,
    StructDirComponent,
    HighlightDirective,
    PipesComponent,
    FilterPipe,
    HeaderComponent,
    ReportComponent,
    ProductlistComponent,
    OperatormasterComponent
  ], // include all your components, pipes & directives
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoolStorageModule.forRoot(),
    HttpClientModule
    
    
  ], // include feature modules
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
