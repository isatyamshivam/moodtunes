package com.moodtunes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moodtunes.model.Mood;
import com.moodtunes.model.Playlist;
import com.moodtunes.service.SpotifyService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow requests from any origin for development. Restrict in production.
public class RecommendationController {

    @Autowired
    private SpotifyService spotifyService;
    
    @GetMapping("/recommendations/{mood}")
    public ResponseEntity<Playlist> getRecommendations(@PathVariable String mood) {
        try {
            Mood moodEnum = Mood.valueOf(mood.toUpperCase());
            Playlist recommendations = spotifyService.getRecommendationsByMood(moodEnum);
            return ResponseEntity.ok(recommendations);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
