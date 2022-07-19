import React, { useRef, useState } from "react";
import { Song } from "../types/Globals";

import "../App.css";

const SongPlayer = ({
  name,
  artist_name,
  music_file_path,
  cover_image_aspect_ratio,
  cover_image_path,
}: Song) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music_file_path));

  return (
    <div className="player">
      <img src={cover_image_path} alt="Image" className="artwork" />
      <p>{name}</p>
      <p>{artist_name}</p>
      <button
        onClick={() => {
          setIsPlaying(!isPlaying);
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
        }}
      >
        Play
      </button>
    </div>
  );
};

export default SongPlayer;
