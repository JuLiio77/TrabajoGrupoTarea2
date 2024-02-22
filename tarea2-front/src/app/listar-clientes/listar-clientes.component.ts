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


  ngOnInit(): void {
   this.obtenerClientes();

  }

  constructor(private clienteService: ClienteService ){}

   obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe(clientes => this.clientes = clientes);
  } 


}
