import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { usuarioServiceService } from "../../../services/usuario-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-recoverypassword',
  templateUrl: './recoverypassword.component.html',
  styleUrls: ['./recoverypassword.component.css']
})
export class RecoverypasswordComponent {
  recoveryForm1 :FormGroup;
  recoveryForm2 :FormGroup;
  //Cambio CSS
  forma ={
    'container':true
  }
  constructor(private fb: FormBuilder,public UsuarioService:usuarioServiceService,public router:Router){
  }
  private recoveryUser = {}
  private id_ = ""

  ngOnInit(): void {
    //Codigo
    this.recoveryForm1 = this.fb.group({
      // otros controles del formulario
      Token_recoveryPassword: new FormControl('',[Validators.required, Validators.minLength(5)]),
    });
    ///Buscar usuario
    this.recoveryForm2 = this.fb.group({
      // otros controles del formulario
      identificacion: new FormControl('',[Validators.required, Validators.minLength(5)]),
    });
  }

  BuscarUsuario(){
    this.id_ = this.recoveryForm2.get("identificacion").value.toString();
    this.recoveryUser = {user:this.id_};
    this.UsuarioService.getUsuario(this.recoveryUser,"searchRecovery/").subscribe(
      (res) =>{
          console.log('HTTP response ',res)
          this.forma['right-panel-active']=true;
      },
      (error)=>{
        console.log('HTTP Error ', error)
      },
      () => console.log('HTTP request completed.')
    )
  }
  validarToken(){
    this.id_ = this.recoveryForm2.get("identificacion").value.toString();
    this.recoveryUser = {user:this.id_};
    this.UsuarioService.getUsuario(this.recoveryUser,"searchRecovery/").subscribe(
      (res) =>{
          console.log('HTTP response ',res)
          this.forma['right-panel-active']=true;
      },
      (error)=>{
        console.log('HTTP Error ', error)
      },
      () => console.log('HTTP request completed.')
    )
  }

}
