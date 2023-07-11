import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//MODULOS CONSTRUIDOS
import { LoginModule } from "./module/login/login.module";
import { CalendarioEmpresaModule } from "./module/calendario-empresa/calendario-empresa.module";
import { HomeMisionalModule } from "./module/home-misional/home-misional.module"
//MODULOS EXTERNOS O PROPIOS ANGULAR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
// import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    CalendarioEmpresaModule,
    HomeMisionalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    // RecaptchaModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
