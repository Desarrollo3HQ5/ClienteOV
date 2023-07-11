import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario-component',
  templateUrl: './calendario-component.component.html',
  styleUrls: ['./calendario-component.component.css']
})
export class CalendarioComponentComponent {
  date: Date = new Date();
  mes = this.date.getMonth();
  linkURL = "https://raw.githubusercontent.com/HQ5SAS/Recursos_Publicos/main/lib/img/home_gallery/"+this.mes+".png"
}
