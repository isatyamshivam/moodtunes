package com.moodtunes.model;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "liked_songs")
@Data
@NoArgsConstructor
public class LikedSong {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @Column(nullable = false)
    private String spotifyId;
    
    private String name;
    
    private String artist;
    
    private String imageUrl;
    
    @Enumerated(EnumType.STRING)
    private Mood associatedMood; // What mood the user was in when liking the song
    
    @Column(nullable = false)
    private LocalDateTime likedAt = LocalDateTime.now();
}
