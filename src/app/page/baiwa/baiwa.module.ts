import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { ButtonModule } from 'src/app/components/buttons/button.module';
import { CardModule } from 'src/app/components/card/card.module';
import { BlockuiComponent } from './blockui/blockui.component';
import { DataTablesModule } from 'angular-datatables';
import { DatatableComponent } from './datatable/datatable.component';
import { LoginComponent } from './page/login/login.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  { path: 'buttons', component: ButtonComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'blockui', component: BlockuiComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    ButtonComponent,
    CardsComponent,
    BlockuiComponent,
    DatatableComponent,
    LoginComponent,
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
