package com.example.springreact.services;

import com.example.springreact.models.Cuentas;
import com.example.springreact.repository.CuentaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CuentaService {

    @Autowired
    private CuentaRepository cuentaRepository;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    public Cuentas registrarCuenta(Cuentas cuenta) {
        // cuenta.setPassword(passwordEncoder.encode(cuenta.getPassword())); // Encriptar contraseña
        cuenta.setRole("USER"); // Asignar rol por defecto
        return cuentaRepository.save(cuenta);
    }

    public Optional<Cuentas> buscarPorUsername(String username) {
        return cuentaRepository.findByUsername(username);
    }

    public boolean verificarCredenciales(String username, String password) {
        Optional<Cuentas> cuenta = cuentaRepository.findByUsername(username);
        //return cuenta.isPresent() && passwordEncoder.matches(password, cuenta.get().getPassword());
        return cuenta.isPresent() && password.equals(cuenta.get().getPassword());
    }
}

