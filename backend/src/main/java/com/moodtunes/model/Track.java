package com.moodtunes.model;

public class Track {
    private String id;
    private String name;
    private String artist;
    private String imageUrl;
    private String previewUrl;
    private String spotifyUrl;
    
    public Track() {
    }
    
    public Track(String id, String name, String artist, String imageUrl, String previewUrl, String spotifyUrl) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.imageUrl = imageUrl;
        this.previewUrl = previewUrl;
        this.spotifyUrl = spotifyUrl;
    }

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
}
