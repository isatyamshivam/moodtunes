package com.moodtunes.model;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "mood_history")
@Data
@NoArgsConstructor
public class MoodHistory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Mood mood;
    
    @Column(nullable = false)
    private LocalDateTime timestamp = LocalDateTime.now();
    
    // Optional: track how the mood was detected
    private String detectionMethod; // "SELFIE", "MANUAL", etc.
    
    // Optional: store confidence level if detected by AI
    private Double confidence;
}
