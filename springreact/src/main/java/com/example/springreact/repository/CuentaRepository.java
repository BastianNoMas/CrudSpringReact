package com.example.springreact.repository;

import com.example.springreact.models.Cuentas;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CuentaRepository extends JpaRepository<Cuentas, Long>{
    Optional<Cuentas> findByUsername(String username);
    
    
}
