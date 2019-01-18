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

const routes: Routes = [
  { path: 'buttons', component: ButtonComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'blockui', component: BlockuiComponent },
  { path: 'datatable', component: DatatableComponent },
];

@NgModule({
  declarations: [
    ButtonComponent,
    CardsComponent,
    BlockuiComponent,
    DatatableComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DataTablesModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BaiwaModule { }
