package com.exercise.springboot.controller;

import com.exercise.springboot.model.Weight;
import com.exercise.springboot.repository.WeightRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weight")
@CrossOrigin(origins = "http://localhost:4200")
public class WeightController {
    private final WeightRepository weightRepository;

    public WeightController(WeightRepository weightRepository) {
        this.weightRepository = weightRepository;
    }

    @PostMapping
    public Weight saveWeight(@RequestBody Weight weight) {
        return weightRepository.save(weight);
    }

    @GetMapping
    public List<Weight> getAllWeights() {
        return weightRepository.findAll();
    }
}
