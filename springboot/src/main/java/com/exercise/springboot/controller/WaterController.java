package com.exercise.springboot.controller;

import com.exercise.springboot.model.Water;
import com.exercise.springboot.repository.WaterRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/water")
@CrossOrigin(origins = "http://localhost:4200")
public class WaterController {

    private final WaterRepository waterRepository;

    public WaterController(WaterRepository waterRepository) {
        this.waterRepository = waterRepository;
    }

    @PostMapping
    public ResponseEntity<Water> saveWater(@RequestBody Water water) {
        System.out.println("Received water intake: " + water.getOunces());

        if (water.getDateRecorded() == null) {
            water.setDateRecorded(LocalDateTime.now());
        }

        Water saved = waterRepository.save(water);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<Water>> getAllWaterEntries() {
        return ResponseEntity.ok(waterRepository.findAll());
    }
}
