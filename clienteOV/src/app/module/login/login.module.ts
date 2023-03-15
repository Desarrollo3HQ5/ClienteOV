import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
///MATERIAL
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [

 ],
 providers: [
]
})
export class LoginModule { }
