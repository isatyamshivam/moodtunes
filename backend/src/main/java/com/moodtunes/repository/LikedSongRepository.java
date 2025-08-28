package com.moodtunes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moodtunes.model.LikedSong;
import com.moodtunes.model.Mood;
import com.moodtunes.model.User;

public interface LikedSongRepository extends JpaRepository<LikedSong, Long> {
    List<LikedSong> findByUser(User user);
    
    List<LikedSong> findByUserAndAssociatedMood(User user, Mood mood);
}
