import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeMisionalComponent } from './components/home-misional/home-misional.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HomeMisionalComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeMisionalModule { }
