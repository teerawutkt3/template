import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { Dashboard2Component } from 'src/app/page/dashboard2/dashboard2.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [

      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard2', component: Dashboard2Component },
      {
        path: 'components',
        loadChildren: '../../page/baiwa/baiwa.module#BaiwaModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
