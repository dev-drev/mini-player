export interface Song {
  id: string;
  name?: string;
  artist_name?: string;
  song_release?: string;
  likes?: number | any;
  plays?: number;
  cover_image_path?: string;
  music_file_path?: string;
}

export type AudioInterface = {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
};
