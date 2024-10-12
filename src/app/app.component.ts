import { Component } from '@angular/core';

class User{
  constructor(public nombre:string,public apellido:string){}
}

const user1 = new User('Roger','Carrillo');
const user2 = new User('Carmen','Martinez');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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


}
