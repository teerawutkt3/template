import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { Dashboard2Component } from 'src/app/page/dashboard2/dashboard2.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    Dashboard2Component
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule,
  ]
})
export class LayoutModule { }
