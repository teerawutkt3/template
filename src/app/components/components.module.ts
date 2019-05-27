import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './buttons/button.module';
import { CardModule } from './card/card.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { NotificationModule } from './notification/notification.module';
import { ModalModule } from './modal/modal.module';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    BreadcrumbModule,
    NotificationModule,
    ModalModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    BreadcrumbModule,
    NotificationModule,
    ModalModule,
    NgSelect2Module
  ],
})
export class ComponentsModule { }
