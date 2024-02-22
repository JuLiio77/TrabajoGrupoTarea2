package com.example.tarea2back.controller;

import com.example.tarea2back.model.ClienteModel;
import com.example.tarea2back.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/clientes")
public class ClientesController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping("/list")
    public List<ClienteModel> listCLientes(){
        return clienteService.listCliente();
    }

    @PostMapping()
    public ClienteModel guardarCliente(@RequestBody ClienteModel clienteModel){
        return clienteService.saveClientes(clienteModel);
    }
}
