import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
//Servicio cookies
import { CookieService } from "ngx-cookie-service";
//MODELS
import { UsuarioModel } from "../models/usuario-model.models";
import { tusuarioModel } from "../models/tusuario-model.models";
@Injectable({
    providedIn: 'root'
  })
  export class usuarioServiceService {
    public httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "authorization": this.getToken()
        })
    };
    
    private dominioURL =  "http://localhost:7000/"
    private GetusuarioURL = this.dominioURL + "authLogin/";
    private getipoUsuarioURl = this.dominioURL + "tipousuario/"

    constructor(private http: HttpClient, private cookies: CookieService) {}
    public getUsuario(_id: string){
        return this.http.get(this.GetusuarioURL);
      }
    
    public postUser(newUsuario: UsuarioModel, ruta:string,):Observable<any>{
      console.log("BACK")
        return this.http.post<any>(this.dominioURL + ruta,newUsuario,this.httpOptions);
      }

      //COOKIES
      setToken(token: string) {
        this.cookies.set("token",token);
      }
      getToken() {
        return this.cookies.get("token");
      }

  }