package com.exercise.springboot.controller;

import com.exercise.springboot.model.Step;
import com.exercise.springboot.repository.StepRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/steps")
@CrossOrigin(origins = "http://localhost:4200")
public class StepController {

    private final StepRepository stepRepository;

    public StepController(StepRepository stepRepository) {
        this.stepRepository = stepRepository;
    }

    @PostMapping
    public Step saveStep(@RequestBody Step step) {
        return stepRepository.save(step);
    }

    @GetMapping
    public List<Step> getAllSteps() {
        return stepRepository.findAll();
    }
}
