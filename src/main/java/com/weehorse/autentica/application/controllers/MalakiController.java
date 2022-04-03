package com.weehorse.autentica.application.controllers;

import com.weehorse.autentica.application.entities.Malaki;
import com.weehorse.autentica.application.repositories.MalakiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/malaki")
public class MalakiController {

    @Autowired
    MalakiRepository malakiRepository;

    @GetMapping()
    @PreAuthorize("permitAll()")
    public List<Malaki> get() {
        return malakiRepository.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public Malaki get(@PathVariable String id) {
        return malakiRepository.findById(id).get();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Malaki create(@RequestBody Malaki malaki){
        return malakiRepository.save(malaki);
    }

    @PutMapping
    @PreAuthorize("hasRole('ADMIN')")
    public String update(){
        return "Malaki updated";
    }

    @PatchMapping
    @PreAuthorize("hasRole('ADMIN')")
    public String updateProperty(){
        return "Single Malaki property updated";
    }

    @DeleteMapping
    @PreAuthorize("hasRole('ADMIN')")
    public String delete(){
        return "Malaki deleted";
    }

}
