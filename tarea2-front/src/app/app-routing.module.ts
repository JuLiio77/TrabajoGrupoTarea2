import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';


const routes: Routes = [
  { path: 'clientes', component: ListarClientesComponent },
  { path: 'agregar-cliente', component: AgregarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
