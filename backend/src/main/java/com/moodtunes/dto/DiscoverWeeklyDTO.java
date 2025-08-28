package com.moodtunes.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.moodtunes.model.DiscoverWeekly;
import com.moodtunes.model.DiscoverWeeklyTrack;
import com.moodtunes.model.Mood;

public class DiscoverWeeklyDTO {
    private Long id;
    private LocalDateTime generatedAt;
    private LocalDateTime expiresAt;
    private Mood dominantMood;
    private List<TrackDTO> tracks;
    
    public DiscoverWeeklyDTO(DiscoverWeekly discoverWeekly) {
        this.id = discoverWeekly.getId();
        this.generatedAt = discoverWeekly.getGeneratedAt();
        this.expiresAt = discoverWeekly.getExpiresAt();
        this.dominantMood = discoverWeekly.getDominantMood();
        
        this.tracks = new ArrayList<>();
        for (DiscoverWeeklyTrack track : discoverWeekly.getTracks()) {
            this.tracks.add(new TrackDTO(track));
        }
    }
    
    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }

    public void setGeneratedAt(LocalDateTime generatedAt) {
        this.generatedAt = generatedAt;
    }

    public LocalDateTime getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(LocalDateTime expiresAt) {
        this.expiresAt = expiresAt;
    }

    public Mood getDominantMood() {
        return dominantMood;
    }

    public void setDominantMood(Mood dominantMood) {
        this.dominantMood = dominantMood;
    }

    public List<TrackDTO> getTracks() {
        return tracks;
    }

    public void setTracks(List<TrackDTO> tracks) {
        this.tracks = tracks;
    }

    public static class TrackDTO {
        private String id;
        private String name;
        private String artist;
        private String imageUrl;
        private String previewUrl;
        private String spotifyUrl;
        private String recommendationReason;
        
        public TrackDTO(DiscoverWeeklyTrack track) {
            this.id = track.getSpotifyId();
            this.name = track.getName();
            this.artist = track.getArtist();
            this.imageUrl = track.getImageUrl();
            this.previewUrl = track.getPreviewUrl();
            this.spotifyUrl = track.getSpotifyUrl();
            this.recommendationReason = track.getRecommendationReason();
        }
        
        // Getters and setters
        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getArtist() {
            return artist;
        }

        public void setArtist(String artist) {
            this.artist = artist;
        }

        public String getImageUrl() {
            return imageUrl;
        }

        public void setImageUrl(String imageUrl) {
            this.imageUrl = imageUrl;
        }

        public String getPreviewUrl() {
            return previewUrl;
        }

        public void setPreviewUrl(String previewUrl) {
            this.previewUrl = previewUrl;
        }

        public String getSpotifyUrl() {
            return spotifyUrl;
        }

        public void setSpotifyUrl(String spotifyUrl) {
            this.spotifyUrl = spotifyUrl;
        }

        public String getRecommendationReason() {
            return recommendationReason;
        }

        public void setRecommendationReason(String recommendationReason) {
            this.recommendationReason = recommendationReason;
        }
    }
}
