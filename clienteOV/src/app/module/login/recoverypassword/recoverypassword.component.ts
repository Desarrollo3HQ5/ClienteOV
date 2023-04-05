import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recoverypassword',
  templateUrl: './recoverypassword.component.html',
  styleUrls: ['./recoverypassword.component.css']
})
export class RecoverypasswordComponent {
  recoveryForm1 :FormGroup;
  recoveryForm2 :FormGroup;
  forma ={
    'container':true
  }
  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    //Codigo
    this.recoveryForm1 = this.fb.group({
      // otros controles del formulario
      identificacion: new FormControl('',[Validators.required, Validators.minLength(5)]),
    });
    ///Buscar usuario
    this.recoveryForm2 = this.fb.group({
      // otros controles del formulario
      identificacion: new FormControl('',[Validators.required, Validators.minLength(5)]),
    });
  }

  BuscarUsuario(){

  }

}
