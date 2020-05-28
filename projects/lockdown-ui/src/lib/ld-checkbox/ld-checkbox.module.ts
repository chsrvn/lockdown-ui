import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LdCheckboxComponent } from './ld-checkbox.component';



@NgModule({
  declarations: [LdCheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [LdCheckboxComponent]
})
export class LdCheckboxModule { }
