import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponentComponent } from './calendario-component/calendario-component.component';



@NgModule({
  declarations: [
    CalendarioComponentComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarioEmpresaModule {
  
 }
