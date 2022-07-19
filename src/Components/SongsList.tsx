import React, { useEffect } from "react";
import { Song } from "../types/Globals";
import SongPlayer from "./SongPlayer";

const SongsList = () => {
  const [songs, setSongs] = React.useState<Song[]>([]);
  useEffect(() => {
    async function getSongs() {
      const response = await fetch(
        "https://api-stg.jam-community.com/song/trending"
      );
      const data = await response.json();
      setSongs(data);
    }
    getSongs();
  }, []);
  console.log(songs);

  return (
    <>
      <h1>SongsList</h1>

      {songs.map((item, idx) => {
        return (
          <div>
            <p>{item.name}</p>
            <audio
              className="audio-control"
              controls
              src={item.music_file_path}
            />
            <SongPlayer
              name={item.name}
              artist_name={item.artist_name}
              music_file_path={item.music_file_path}
              cover_image_path={item.cover_image_path}
              cover_image_aspect_ratio={item.cover_image_aspect_ratio}
            />
          </div>
        );
      })}
    </>
  );
};

export default SongsList;
