package com.moodtunes.model;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "discover_weekly_tracks")
@Data
@NoArgsConstructor
public class DiscoverWeeklyTrack {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "discover_weekly_id", nullable = false)
    private DiscoverWeekly discoverWeekly;
    
    @Column(nullable = false)
    private String spotifyId;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String artist;
    
    private String album;
    
    private String imageUrl;
    
    private String previewUrl;
    
    private String spotifyUrl;
    
    // Why this song was recommended (e.g., based on mood, similar to liked songs, etc.)
    private String recommendationReason;
}
