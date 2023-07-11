
import { Component , OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { usuarioServiceService } from "../../../services/usuario-service.service";
import { Router } from '@angular/router';
//MODELS
import { UsuarioModel } from "../../../models/usuario-model.models";                                      
import { tusuarioModel } from "../../../models/tusuario-model.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  //Validador Captch
  public captchaResolved : boolean = false;
  private id_:string
  private pass_:string
  public TusuarioModel :tusuarioModel={nombre:"",identificacion:"",IDproceso:"",proceso: ""}
  private newUsuario :UsuarioModel={user:"",password:""}
  //FORMULARIO INGRESO
  ingresoForm :FormGroup;
  // ingresoForm = new FormGroup({
  //   identificacion: new FormControl('',[Validators.required, Validators.minLength(5)]),
  //   password : new FormControl('',[Validators.required])
  // });
  //FORMULARIO VARIFICACION
  verifiForm = new FormGroup({
    identificacionVerif: new FormControl('',[Validators.required])
  })
  //Ocultar Formularios
  ValidadorSignUp : boolean = false;
  forma ={
    'container':true
  }
  // ,
  // 'right-panel-active':false
  lista:string[]=[];
  constructor(public UsuarioService:usuarioServiceService,private fb: FormBuilder,public router:Router){
  }
  ngOnInit(): void {
    this.ingresoForm = this.fb.group({
      // otros controles del formulario
      identificacion: new FormControl('',[Validators.required, Validators.minLength(5)]),
      password : new FormControl('',[Validators.required])
    });
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
    this.UsuarioService.postUser(this.newUsuario,"authLogin/").subscribe(
      (res) =>{
          console.log('HTTP response',res)
          this.UsuarioService.setToken(res.body);
          this.UsuarioService.postUser(this.newUsuario,"sign/").subscribe(
            res => {
              console.log('HTTP response', res);
              this.router.navigate(['/homemisional'])
            },
            err => console.log('HTTP Error', err),
            () => console.log('HTTP request completed.')
            )
      },
      (error)=>{
        console.log('HTTP Error', error)
      },
      () => console.log('HTTP request completed.')
    )
  }
  verificarId(){
    
  }
  //Función para el captcha
  resolved(captchaResponse: string) {
    //Cambiar estado de validador para permitir ingreso
    this.captchaResolved = (captchaResponse && captchaResponse.length > 0) ? true : false
  }
}
