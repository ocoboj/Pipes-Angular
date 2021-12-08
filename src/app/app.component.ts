import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'olGa coneSa';
  valor: number = 10000;
  obj = {
    nombre: 'Olga'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
