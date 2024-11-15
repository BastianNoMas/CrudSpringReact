package com.example.springreact.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
public class Cuentas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private int id;
    
    @Column(unique = true, nullable = false)
    @Getter
    @Setter
    private String username;
    
    @Column(nullable = false)
    @Getter
    @Setter
    private String rut;
    
    @Column (nullable = false)
    @Getter
    @Setter
    private String Direccion;
    
    
    @Column(nullable = false)
    @Getter
    @Setter
    private String password;
    
    @Column(nullable = false)
    @Getter
    @Setter
    private String repetirPassword;
    
    @Column (nullable = false)
    @Getter
    @Setter
    private String correoElectronico;
    
    
    @Column(nullable = false)
    @Getter
    @Setter
    private String role;
}
