package com.exercise.springboot.repository;

import com.exercise.springboot.model.Water;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaterRepository extends JpaRepository<Water, Long> {
}

