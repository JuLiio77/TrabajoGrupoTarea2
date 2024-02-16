import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {
  nuevoCliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  guardarCliente() {
    this.clienteService.agregarCliente(this.nuevoCliente).subscribe(
      (respuesta) => {
        console.log('Cliente agregado correctamente:', respuesta);
       
      },
      (error) => {
        console.error('Error al agregar cliente:', error);
        
      }
    );
    
  }

}
