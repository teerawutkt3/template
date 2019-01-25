import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { ButtonSaveComponent } from './button-save/button-save.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';
import { ButtonBackComponent } from './button-back/button-back.component';
import { ButtonCancelComponent } from './button-cancel/button-cancel.component';
import { ButtonPrintComponent } from './button-print/button-print.component';
import { ButtonNextComponent } from './button-next/button-next.component';
import { ButtonSelectComponent } from './button-select/button-select.component';
import { ButtonCustomComponent } from './button-custom/button-custom.component';
import { ButtonConfirmComponent } from './button-confirm/button-confirm.component';

@NgModule({

  imports: [
    CommonModule,
  ],
  declarations: [
    ButtonAddComponent,
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonEditComponent,
    ButtonBackComponent,
    ButtonCancelComponent,
    ButtonPrintComponent,
    ButtonNextComponent,
    ButtonSelectComponent,    
    ButtonCustomComponent, 
    ButtonConfirmComponent
  ],
  exports: [
    ButtonAddComponent,
    ButtonDeleteComponent,
    ButtonSaveComponent,
    ButtonEditComponent,
    ButtonBackComponent,
    ButtonCancelComponent,
    ButtonPrintComponent,
    ButtonNextComponent,
    ButtonSelectComponent,
    ButtonCustomComponent,
    ButtonConfirmComponent
  ],

})
export class ButtonModule { }
