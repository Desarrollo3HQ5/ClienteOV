import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { LoginComponent } from "./module/login/login/login.component";
import { RecoverypasswordComponent } from "./module/login/recoverypassword/recoverypassword.component";
import { CalendarioComponentComponent } from "./module/calendario-empresa/calendario-component/calendario-component.component";
//MODULO DE HOMEMISIONAL
import { HomeMisionalComponent } from "./module/home-misional/components/home-misional/home-misional.component";

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'recoverypassword', component: RecoverypasswordComponent },
  { path: 'calendario',  component: CalendarioComponentComponent},
  { path: 'homemisional',  component: HomeMisionalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
