import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit{
  clientes!: any[];

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
   this.obtenerClientes();

  }

  obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe(clientes => this.clientes = clientes);
  }

}
