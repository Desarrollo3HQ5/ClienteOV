import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

///MATERIAL
import { MaterialModule } from "../material/material.module";
//Captcha
import { RecaptchaModule } from 'ng-recaptcha';
import { RecoverypasswordComponent } from './recoverypassword/recoverypassword.component';
@NgModule({
  declarations: [
    LoginComponent,
    RecoverypasswordComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RecaptchaModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
 ],
 providers: [
]
})
export class LoginModule { }
