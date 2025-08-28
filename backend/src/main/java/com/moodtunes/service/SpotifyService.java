package com.moodtunes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moodtunes.model.Mood;
import com.moodtunes.model.Playlist;
import com.moodtunes.model.Track;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.specification.Recommendations;
import se.michaelthelin.spotify.model_objects.specification.TrackSimplified;
import se.michaelthelin.spotify.requests.data.browse.GetRecommendationsRequest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SpotifyService {

    @Autowired
    private SpotifyApi spotifyApi;
    
    private static final Map<Mood, Map<String, Float>> MOOD_PARAMETERS = new HashMap<>();
    
    static {
        // Happy mood parameters
        Map<String, Float> happyParams = new HashMap<>();
        happyParams.put("min_energy", 0.7f);
        happyParams.put("min_valence", 0.7f);
        happyParams.put("target_tempo", 120f);
        MOOD_PARAMETERS.put(Mood.HAPPY, happyParams);
        
        // Sad mood parameters
        Map<String, Float> sadParams = new HashMap<>();
        sadParams.put("max_energy", 0.4f);
        sadParams.put("max_valence", 0.4f);
        sadParams.put("target_tempo", 80f);
        MOOD_PARAMETERS.put(Mood.SAD, sadParams);
        
        // Excited mood parameters
        Map<String, Float> excitedParams = new HashMap<>();
        excitedParams.put("min_energy", 0.8f);
        excitedParams.put("target_tempo", 140f);
        excitedParams.put("min_danceability", 0.7f);
        MOOD_PARAMETERS.put(Mood.EXCITED, excitedParams);
        
        // Relaxed mood parameters
        Map<String, Float> relaxedParams = new HashMap<>();
        relaxedParams.put("max_energy", 0.4f);
        relaxedParams.put("target_acousticness", 0.8f);
        relaxedParams.put("max_tempo", 90f);
        MOOD_PARAMETERS.put(Mood.RELAXED, relaxedParams);
        
        // Neutral mood parameters
        Map<String, Float> neutralParams = new HashMap<>();
        neutralParams.put("target_energy", 0.5f);
        neutralParams.put("target_valence", 0.5f);
        neutralParams.put("target_tempo", 100f);
        MOOD_PARAMETERS.put(Mood.NEUTRAL, neutralParams);
    }
    
    public Playlist getRecommendationsByMood(Mood mood) {
        try {
            GetRecommendationsRequest.Builder requestBuilder = spotifyApi.getRecommendations()
                    .limit(20)
                    .seed_genres(getMoodGenres(mood));
            
            // Apply mood-specific parameters
            Map<String, Float> parameters = MOOD_PARAMETERS.get(mood);
            if (parameters != null) {
                for (Map.Entry<String, Float> param : parameters.entrySet()) {
                    applyParameter(requestBuilder, param.getKey(), param.getValue());
                }
            }
            
            Recommendations recommendations = requestBuilder.build().execute();
            TrackSimplified[] tracks = recommendations.getTracks();
            
            List<Track> trackList = new ArrayList<>();
            for (TrackSimplified track : tracks) {
                String artists = String.join(", ", track.getArtists()[0].getName());
                trackList.add(new Track(
                        track.getId(),
                        track.getName(),
                        artists,
                        track.getAlbum().getImages()[0].getUrl(),
                        track.getPreviewUrl(),
                        track.getExternalUrls().getExternalUrls().get("spotify")
                ));
            }
            
            return new Playlist("Mood: " + mood.toString(), trackList);
            
        } catch (IOException | SpotifyWebApiException | org.apache.hc.core5.http.ParseException e) {
            System.err.println("Error getting recommendations: " + e.getMessage());
            return new Playlist("Error", new ArrayList<>());
        }
    }
    
    private void applyParameter(GetRecommendationsRequest.Builder builder, String key, Float value) {
        switch (key) {
            case "min_energy":
                builder.min_energy(value);
                break;
            case "max_energy":
                builder.max_energy(value);
                break;
            case "target_energy":
                builder.target_energy(value);
                break;
            case "min_valence":
                builder.min_valence(value);
                break;
            case "max_valence":
                builder.max_valence(value);
                break;
            case "target_valence":
                builder.target_valence(value);
                break;
            case "min_tempo":
                builder.min_tempo(value);
                break;
            case "max_tempo":
                builder.max_tempo(value);
                break;
            case "target_tempo":
                builder.target_tempo(value);
                break;
            case "min_danceability":
                builder.min_danceability(value);
                break;
            case "max_danceability":
                builder.max_danceability(value);
                break;
            case "target_acousticness":
                builder.target_acousticness(value);
                break;
            default:
                break;
        }
    }
    
    private String[] getMoodGenres(Mood mood) {
        switch (mood) {
            case HAPPY:
                return new String[]{"pop", "happy", "dance"};
            case SAD:
                return new String[]{"sad", "acoustic", "piano"};
            case EXCITED:
                return new String[]{"edm", "electro", "dance", "party"};
            case RELAXED:
                return new String[]{"chill", "ambient", "sleep"};
            case NEUTRAL:
                return new String[]{"indie", "rock", "alt-rock"};
            default:
                return new String[]{"pop"};
        }
    }
}
