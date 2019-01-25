import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './buttons/button.module';
import { CardModule } from './card/card.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { NotificationModule } from './notification/notification.module';
import { AlertService } from './notification/alert/alert.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    BreadcrumbModule,
    NotificationModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    BreadcrumbModule,
    NotificationModule
  ],
  providers:[AlertService]
})
export class ComponentsModule { }
