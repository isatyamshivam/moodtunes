package com.moodtunes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moodtunes.dto.DiscoverWeeklyDTO;
import com.moodtunes.model.DiscoverWeekly;
import com.moodtunes.model.User;
import com.moodtunes.repository.UserRepository;
import com.moodtunes.service.DiscoverWeeklyService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DiscoverWeeklyController {

    @Autowired
    private DiscoverWeeklyService discoverWeeklyService;
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/discover-weekly")
    public ResponseEntity<?> getDiscoverWeeklyPlaylist() {
        try {
            // For now, use a mock user since we don't have authentication implemented yet
            User mockUser = userRepository.findById(1L)
                .orElse(createMockUser());
            
            DiscoverWeekly discoverWeekly = discoverWeeklyService.getCurrentDiscoverWeekly(mockUser);
            
            // Convert to DTO to avoid sending unnecessary user details
            DiscoverWeeklyDTO dto = new DiscoverWeeklyDTO(discoverWeekly);
            
            return new ResponseEntity<>(dto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error retrieving Discover Weekly: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    // Helper method to create a mock user for development/testing
    private User createMockUser() {
        User user = new User();
        user.setUsername("mockuser");
        user.setEmail("mock@example.com");
        user.setDisplayName("Mock User");
        return userRepository.save(user);
    }
}
