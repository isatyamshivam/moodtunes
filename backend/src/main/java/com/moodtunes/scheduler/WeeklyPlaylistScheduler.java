package com.moodtunes.scheduler;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.moodtunes.model.User;
import com.moodtunes.repository.UserRepository;
import com.moodtunes.service.DiscoverWeeklyService;

@Component
public class WeeklyPlaylistScheduler {

    private static final Logger logger = LoggerFactory.getLogger(WeeklyPlaylistScheduler.class);
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private DiscoverWeeklyService discoverWeeklyService;
    
    /**
     * Generate Discover Weekly playlists every Monday at 1:00 AM
     */
    @Scheduled(cron = "0 0 1 * * MON") // Runs at 1:00 AM every Monday
    public void generateWeeklyPlaylists() {
        logger.info("Starting weekly playlist generation for all users...");
        
        List<User> users = userRepository.findAll();
        int count = 0;
        
        for (User user : users) {
            try {
                discoverWeeklyService.generateDiscoverWeeklyForUser(user);
                count++;
            } catch (Exception e) {
                logger.error("Error generating playlist for user {}: {}", user.getId(), e.getMessage(), e);
            }
        }
        
        logger.info("Weekly playlist generation completed. Generated {} playlists.", count);
    }
}
