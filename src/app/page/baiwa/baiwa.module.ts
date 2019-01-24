import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { BlockuiComponent } from './blockui/blockui.component';
import { DataTablesModule } from 'angular-datatables';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './page/login/login.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'blockui', component: BlockuiComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
];

@NgModule({
  declarations: [
    ButtonComponent,
    CardsComponent,
    BlockuiComponent,
    DatatableComponent,
    LoginComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BaiwaModule { }
