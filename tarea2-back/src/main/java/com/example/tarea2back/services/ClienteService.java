package com.example.tarea2back.services;

import com.example.tarea2back.model.ClienteModel;
import com.example.tarea2back.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClientesRepository clientesRepository;

    public ClienteModel saveClientes(ClienteModel cliente){
        return clientesRepository.save(cliente);
    }

    public List<ClienteModel> listCliente() {
        return clientesRepository.findAll();
    }

}
