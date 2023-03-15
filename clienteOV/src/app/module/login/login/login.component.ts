
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { usuarioServiceService } from "../../../services/usuario-service.service";

//MODELS
import { UsuarioModel } from "../../../models/usuario-model.models";                                      
import { tusuarioModel } from "../../../models/tusuario-model.models";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  private id_:string
  private pass_:string
  public TusuarioModel :tusuarioModel={nombre:"",identificacion:"",IDproceso:"",proceso: ""}
  private newUsuario :UsuarioModel={user:"",password:""}
  //FORMULARIO INGRESO
  ingresoForm = new FormGroup({
    identificacion: new FormControl(''),
    password : new FormControl('')
  });
  //FORMULARIO VARIFICACION
  verifiForm = new FormGroup({
    identificacionVerif: new FormControl('')
  })
  //Ocultar Formularios
  ValidadorSignUp : boolean = false;
  forma ={
    'container':true
  }
  // ,
  // 'right-panel-active':false
  lista:string[]=[];
  constructor(public UsuarioService:usuarioServiceService){
  }
  ngOnInit(): void {
    this.ValidadorSignUp = false;
    this.TusuarioModel={nombre:"",identificacion:"",IDproceso:"",proceso: ""}
  }
  //Registrarse
  verificar(){
    this.forma['right-panel-active']=true;
  }  
  //LOGIN
  loggeo(){
    this.forma['right-panel-active'] = false;
  }  


  sendback(){
    this.id_ = this.ingresoForm.get("identificacion").value.toString();
    this.pass_ = this.ingresoForm.get("password").value.toString();
    this.newUsuario = {user:this.id_,password:this.pass_};
    this.UsuarioService.postUser(this.newUsuario).subscribe(
      (res) =>{
        // 1013677246
        this.UsuarioService.setToken(res.token);
        // console.log(res.token)
        // this.TusuarioModel = res
        // console.log(this.TusuarioModel)
      }
    )
  }
  verificarId(){

  }
}
