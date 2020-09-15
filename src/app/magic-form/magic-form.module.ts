import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicFormComponent } from './magic-form/magic-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MagicFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MagicFormComponent
  ]
})
export class MagicFormModule { }
