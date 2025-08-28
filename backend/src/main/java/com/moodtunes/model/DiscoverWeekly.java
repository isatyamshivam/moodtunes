package com.moodtunes.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "discover_weekly")
@Data
@NoArgsConstructor
public class DiscoverWeekly {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = true, nullable = false)
    private User user;
    
    @Column(nullable = false)
    private LocalDateTime generatedAt = LocalDateTime.now();
    
    @Column(nullable = false)
    private LocalDateTime expiresAt; // When the playlist expires (1 week after generation)
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "discover_weekly_id")
    private List<DiscoverWeeklyTrack> tracks = new ArrayList<>();
    
    // Dominant mood used to generate this playlist
    @Enumerated(EnumType.STRING)
    private Mood dominantMood;
}
