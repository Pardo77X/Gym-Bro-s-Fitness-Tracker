package com.exercise.springboot.controller;

import com.exercise.springboot.entity.WeightTracker;
import com.exercise.springboot.repository.WeightTrackerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weights")
@CrossOrigin(origins = "http://localhost:4200")
public class WeightTrackerController {

    @Autowired
    private WeightTrackerRepository weightTrackerRepository;

    @GetMapping
    public List<WeightTracker> getAllWeights() {
        return weightTrackerRepository.findAll();
    }

    @PostMapping
    public WeightTracker createWeight(@RequestBody WeightTracker weightTracker) {
        return weightTrackerRepository.save(weightTracker);
    }
}
