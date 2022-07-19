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

  return (
    <div className="songs-list">
      <h1>SongsList</h1>
      {songs.map((item, idx) => {
        console.log(item);
        return (
          <SongPlayer
            key={idx}
            likes={item.likes ? item.likes : 0}
            name={item.name}
            artist_name={item.artist_name}
            music_file_path={item.music_file_path}
            cover_image_path={item.cover_image_path}
          />
        );
      })}
    </div>
  );
};

export default SongsList;
