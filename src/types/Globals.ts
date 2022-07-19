export interface Song {
  id: string;
  name?: string;
  artist_name?: string;
  song_release?: string;
  likes?: number | any;
  cover_image_path?: string;
  song_genres?: string[];
  music_file_path?: string;
}

export type AudioInterface = {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
};
