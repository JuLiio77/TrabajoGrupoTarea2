import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit{
  clientes!: any[];

  form: FormGroup
  ngOnInit(): void {
   this.obtenerClientes();

  }

  constructor(private clienteService: ClienteService, private ){}

/*   obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe(clientes => this.clientes = clientes);
  } */

  obtenerClientes(){
    this.clienteService.obtenerClientes().subscribe({
      next: res =>{
        console.log(res)
      },
      error: err =>{
        console.log(err)
      }
    })
  }

}
