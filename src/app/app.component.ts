import { Component } from '@angular/core';
import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleados[] = [
    {id: 1, nombre: "Matias", pais: "Argentina"},
    {id: 2, nombre: "Ryan", pais: "USA"},
    {id: 3, nombre: "Jorge", pais: "Argentina"}
  ]
}
