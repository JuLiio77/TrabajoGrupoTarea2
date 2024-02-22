package com.example.tarea2back.repository;

import com.example.tarea2back.model.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientesRepository extends JpaRepository<ClienteModel, Long>{
}
