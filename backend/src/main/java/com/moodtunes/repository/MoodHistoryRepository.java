package com.moodtunes.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.moodtunes.model.Mood;
import com.moodtunes.model.MoodHistory;
import com.moodtunes.model.User;

public interface MoodHistoryRepository extends JpaRepository<MoodHistory, Long> {
    List<MoodHistory> findByUserOrderByTimestampDesc(User user);
    
    List<MoodHistory> findByUserAndTimestampAfter(User user, LocalDateTime after);
    
    @Query("SELECT mh.mood, COUNT(mh) as count FROM MoodHistory mh WHERE mh.user = ?1 AND mh.timestamp > ?2 GROUP BY mh.mood ORDER BY count DESC")
    List<Object[]> findDominantMoodSince(User user, LocalDateTime since);
}
