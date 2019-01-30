import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './common/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { Dashboard2Component } from './page/dashboard2/dashboard2.component';
import { BlockUiService } from './common/block-ui/block-ui.service';
import { ComponentsModule } from './components/components.module';


@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
   
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    Dashboard2Component,
  ],
  providers: [
    BlockUiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
