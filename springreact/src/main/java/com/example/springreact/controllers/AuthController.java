package com.example.springreact.controllers;

import com.example.springreact.models.Cuentas;
import com.example.springreact.services.CuentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private CuentaService cuentaService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Cuentas cuenta) {
        try {
            cuentaService.registrarCuenta(cuenta);
            return ResponseEntity.ok("Cuenta registrada con éxito");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error al registrar la cuenta: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Cuentas cuenta) {
        boolean isValid = cuentaService.verificarCredenciales(cuenta.getUsername(), cuenta.getPassword());
        if (isValid) {
            return ResponseEntity.ok("Login exitoso");
        } else {
            return ResponseEntity.status(401).body("Credenciales inválidas");
        }
    }
}
