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
  ];

  selectEmpleado : Empleados = new Empleados();

  editar(empleado: Empleados) {
    this.selectEmpleado = empleado;
  }

  addOrEdit(){
    if(this.selectEmpleado.id === 0) {
      this.selectEmpleado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.selectEmpleado);
    }

    this.selectEmpleado = new Empleados();
  }

  eliminar(){
    if(confirm('Estas seguro de querer eliminarlo?')){
      this.empleadoArray = this.empleadoArray.filter(x => x != this.selectEmpleado)
      this.selectEmpleado = new Empleados();
    }
  }
}
