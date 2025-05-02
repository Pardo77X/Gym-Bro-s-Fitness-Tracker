package com.exercise.springboot.repository;

import com.exercise.springboot.entity.WeightTracker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeightTrackerRepository extends JpaRepository<WeightTracker, Long> {
}
