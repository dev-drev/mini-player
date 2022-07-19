export interface Song {
  name?: string;
  artist_name?: string;
  song_release?: string;
  likes?: number;
  cover_image_path?: string;
  song_genres?: string[];
  cover_image_aspect_ratio?: number;
  music_file_path?: string;
}

export interface Player {
  isPlaying?: boolean;
  currentSong?: Song;
  playStopSong?: (song: Song) => void;
  likeSong?: (song: Song) => void;
}
