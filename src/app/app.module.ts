import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './common/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { Dashboard2Component } from './page/dashboard2/dashboard2.component';
import { CardModule } from './components';
import { BlockUiService } from './common/block-ui/block-ui.service';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    Dashboard2Component,
  ],
  providers: [
    BlockUiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
