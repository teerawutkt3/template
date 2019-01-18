import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { ButtonModule } from 'src/app/components/buttons/button.module';
import { CardModule } from 'src/app/components/card/card.module';
const routes: Routes = [
  { path: 'buttons', component: ButtonComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  declarations: [
    ButtonComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BaiwaModule { }
