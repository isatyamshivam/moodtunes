package com.moodtunes.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.moodtunes.model.DiscoverWeekly;
import com.moodtunes.model.DiscoverWeeklyTrack;
import com.moodtunes.model.Mood;
import com.moodtunes.model.Track;
import com.moodtunes.model.User;
import com.moodtunes.repository.DiscoverWeeklyRepository;
import com.moodtunes.repository.MoodHistoryRepository;
import com.moodtunes.repository.UserRepository;

@Service
public class DiscoverWeeklyService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private MoodHistoryRepository moodHistoryRepository;
    
    @Autowired
    private DiscoverWeeklyRepository discoverWeeklyRepository;
    
    @Autowired
    private SpotifyService spotifyService;
    
    /**
     * Generate a Discover Weekly playlist for a specific user
     */
    @Transactional
    public DiscoverWeekly generateDiscoverWeeklyForUser(User user) {
        // 1. Determine the user's dominant mood from the last 30 days
        LocalDateTime oneMonthAgo = LocalDateTime.now().minusDays(30);
        List<Object[]> moodCounts = moodHistoryRepository.findDominantMoodSince(user, oneMonthAgo);
        
        // Default to a neutral mood if no history
        Mood dominantMood = Mood.NEUTRAL;
        
        if (!moodCounts.isEmpty()) {
            dominantMood = (Mood) moodCounts.get(0)[0]; // Get the most frequent mood
        }
        
        // 2. Get recommendations from Spotify based on the dominant mood
        List<Track> recommendedTracks = new ArrayList<>();
        try {
            recommendedTracks = spotifyService.getRecommendationsByMood(dominantMood).getTracks();
        } catch (Exception e) {
            // Log error and continue with empty list
            System.err.println("Error getting recommendations: " + e.getMessage());
        }
        
        // 3. Create the DiscoverWeekly entity
        DiscoverWeekly discoverWeekly = new DiscoverWeekly();
        discoverWeekly.setUser(user);
        discoverWeekly.setDominantMood(dominantMood);
        discoverWeekly.setGeneratedAt(LocalDateTime.now());
        discoverWeekly.setExpiresAt(LocalDateTime.now().plusDays(7)); // Expires in a week
        
        // 4. Convert tracks to DiscoverWeeklyTrack entities
        List<DiscoverWeeklyTrack> tracks = new ArrayList<>();
        for (Track track : recommendedTracks) {
            DiscoverWeeklyTrack weeklyTrack = new DiscoverWeeklyTrack();
            weeklyTrack.setDiscoverWeekly(discoverWeekly);
            weeklyTrack.setSpotifyId(track.getId());
            weeklyTrack.setName(track.getName());
            weeklyTrack.setArtist(track.getArtist());
            weeklyTrack.setImageUrl(track.getImageUrl());
            weeklyTrack.setPreviewUrl(track.getPreviewUrl());
            weeklyTrack.setSpotifyUrl(track.getSpotifyUrl());
            weeklyTrack.setRecommendationReason("Based on your " + dominantMood.toString().toLowerCase() + " mood patterns");
            
            tracks.add(weeklyTrack);
        }
        
        discoverWeekly.setTracks(tracks);
        
        // 5. Save and return the playlist
        return discoverWeeklyRepository.save(discoverWeekly);
    }
    
    /**
     * Get a user's current Discover Weekly playlist
     */
    public DiscoverWeekly getCurrentDiscoverWeekly(User user) {
        Optional<DiscoverWeekly> existing = discoverWeeklyRepository.findByUser(user);
        
        // Return existing playlist if it hasn't expired
        if (existing.isPresent() && existing.get().getExpiresAt().isAfter(LocalDateTime.now())) {
            return existing.get();
        }
        
        // Generate a new one if none exists or if expired
        return generateDiscoverWeeklyForUser(user);
    }
}
