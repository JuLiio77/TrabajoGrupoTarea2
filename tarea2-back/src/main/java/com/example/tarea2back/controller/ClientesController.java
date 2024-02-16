package com.example.tarea2back.controller;

import com.example.tarea2back.model.ClienteModel;
import com.example.tarea2back.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/cliente")
public class ClientesController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping("/guardar")
    public List<ClienteModel> listCLientes(){
        return clienteService.listClientes();
    }

    @PostMapping("/listar")
    public ClienteModel guardarCliente(){
        return clienteService.saveCliente();
    }
}
