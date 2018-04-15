import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { CoreRoutingModule } from './pages.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ],
  declarations: [HomeComponent, Page1Component, Page2Component, LoginComponent, NotFoundComponent, HeaderComponent]
})
export class PagesModule { }
