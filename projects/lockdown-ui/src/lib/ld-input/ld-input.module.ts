import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LdInputComponent } from './ld-input.component';



@NgModule({
  declarations: [LdInputComponent],
  imports: [
    CommonModule
  ],
  exports: [LdInputComponent]
})
export class LdInputModule { }
