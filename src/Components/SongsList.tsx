import React, { useEffect } from "react";
import { Song } from "../types/Globals";

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
            <audio controls src={item.music_file_path} />
          </div>
        );
      })}
    </>
  );
};

export default SongsList;
