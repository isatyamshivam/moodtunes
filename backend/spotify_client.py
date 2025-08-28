import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class SpotifyClient:
    def __init__(self):
        """Initialize the Spotify client with credentials from environment variables"""
        # Get credentials from environment variables
        client_id = os.getenv('SPOTIFY_CLIENT_ID')
        client_secret = os.getenv('SPOTIFY_CLIENT_SECRET')
        
        if not client_id or not client_secret:
            raise ValueError("Missing Spotify API credentials. Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables.")
        
        # Set up the Spotify client with client credentials flow
        auth_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
        self.sp = spotipy.Spotify(auth_manager=auth_manager)
    
    def get_recommendations_by_mood(self, mood):
        """
        Get music recommendations based on mood.
        
        Args:
            mood (str): One of 'Happy', 'Sad', 'Angry', 'Chill', 'Energetic'
            
        Returns:
            list: A list of recommended tracks with their details
        """
        # Map moods to appropriate seed genres and audio features
        mood_params = {
            'Happy': {
                'seed_genres': ['pop', 'happy', 'dance'],
                'target_valence': 0.8,       # High valence = positive/happy
                'target_energy': 0.7,        # Fairly energetic
                'target_danceability': 0.7,  # Danceable
            },
            'Sad': {
                'seed_genres': ['sad', 'indie', 'piano', 'acoustic'],
                'target_valence': 0.2,       # Low valence = negative/sad
                'target_energy': 0.4,        # Lower energy
                'target_danceability': 0.4,  # Less danceable
            },
            'Angry': {
                'seed_genres': ['rock', 'metal', 'punk'],
                'target_valence': 0.3,       # Fairly negative
                'target_energy': 0.9,        # High energy
                'target_danceability': 0.5,  # Medium danceability
                'target_tempo': 130,         # Faster tempo
            },
            'Chill': {
                'seed_genres': ['chill', 'ambient', 'lofi', 'jazz'],
                'target_valence': 0.5,       # Neutral valence
                'target_energy': 0.3,        # Low energy
                'target_acousticness': 0.7,  # More acoustic
                'target_tempo': 90,          # Slower tempo
            },
            'Energetic': {
                'seed_genres': ['edm', 'dance', 'electronic', 'house'],
                'target_valence': 0.6,       # Fairly positive
                'target_energy': 0.9,        # High energy
                'target_danceability': 0.8,  # Very danceable
                'target_tempo': 125,         # Fast tempo
            }
        }
        
        # Default to 'Chill' if mood is not recognized
        params = mood_params.get(mood, mood_params['Chill'])
        
        # Get seed genres (limit to 5 as per API requirements)
        seed_genres = params.pop('seed_genres')[:5] 
        
        try:
            # Get recommendations from Spotify
            results = self.sp.recommendations(
                seed_genres=seed_genres,
                limit=20,
                **params
            )
            
            # Format the results
            tracks = []
            for track in results['tracks']:
                # Get the album art (choose medium size if available)
                album_art = None
                if track['album']['images']:
                    # Sort images by size and pick a medium one
                    sorted_images = sorted(track['album']['images'], key=lambda x: x['width'])
                    # Get medium size or largest if only one size is available
                    if len(sorted_images) > 1:
                        album_art = sorted_images[len(sorted_images) // 2]['url']
                    else:
                        album_art = sorted_images[0]['url']
                
                # Build track object
                track_data = {
                    'id': track['id'],
                    'name': track['name'],
                    'artist': ', '.join([artist['name'] for artist in track['artists']]),
                    'album': track['album']['name'],
                    'album_art': album_art,
                    'preview_url': track['preview_url'],
                    'external_url': track['external_urls']['spotify']
                }
                tracks.append(track_data)
            
            return tracks
            
        except Exception as e:
            print(f"Error getting recommendations from Spotify: {str(e)}")
            return []
