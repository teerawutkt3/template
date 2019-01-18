import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './common/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { Dashboard2Component } from './page/dashboard2/dashboard2.component';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    Dashboard2Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
