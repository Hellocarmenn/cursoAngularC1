import { Component } from '@angular/core';
<<<<<<< HEAD
import { Empleado } from './models/empleado';
=======

class User{
  constructor(public nombre:string,public apellido:string){}
}

const user1 = new User('Roger','Carrillo');
const user2 = new User('Carmen','Martinez');

>>>>>>> 2d695226e53df50d66146fc4756825870ac167f3

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'componentesAngular';
//Componente padre
  empleadosPresentes: Empleado[] = [
    {
      id:1,
      nombre:'Rogelio',
      apellido:'Carrillo'
    },
    {
      id:2,
      nombre:'Carmen',
      apellido:'Martinez'
    },
    {
      id:3,
      nombre:'Xare',
      apellido:'Rosano'
    },
  ];

  empleadosAusentes: Empleado[] = [
    {
      id:4,
      nombre:'Ana',
      apellido:'Carrillo'
    },
    {
      id:5,
      nombre:'Paola',
      apellido:'Martinez'
    },
    {
      id:6,
      nombre:'Luis',
      apellido:'Rosano'
    },
  ];

  eliminarEmpleado(idEliminar:number , from :string){
    if(from === 'empleadosPresentes'){
      this.empleadosPresentes = this.empleadosPresentes.filter(
        (empleado) => empleado.id != idEliminar
      );
    }
    if(from === 'empleadosAusentes'){
      this.empleadosAusentes = this.empleadosAusentes.filter(
        (empleado) => empleado.id != idEliminar
      );
    }
    
    console.log('Recibimos el evento eliminarEmpleado en AppComponent')
  }
=======
  title = 'cursoAngular';

  contador =0;

  sumar(){
    this.contador++;
    alert(this.contador)
  }

  saludar(){
    alert('Holaa!');
  }

  mostrarUsuario(id:string){
    console.log(id);
  }


>>>>>>> 2d695226e53df50d66146fc4756825870ac167f3
}
