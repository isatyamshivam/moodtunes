package com.moodtunes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moodtunes.model.DiscoverWeekly;
import com.moodtunes.model.User;

public interface DiscoverWeeklyRepository extends JpaRepository<DiscoverWeekly, Long> {
    Optional<DiscoverWeekly> findByUser(User user);
}
