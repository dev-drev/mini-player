import React, { useRef, useState } from "react";
import { Song } from "../types/Globals";

import "../App.css";
import { AudioItem } from "./AudioButton";
import LikeButton from "./LikeButton";

const SongPlayer = ({
  name,
  likes,
  artist_name,
  music_file_path,
  cover_image_path,
}: Song) => {
  const audioRef = useRef(new Audio(music_file_path));

  return (
    <div className="player">
      <img src={cover_image_path} alt="Image" className="artwork" />
      <p>{name}</p>
      <p>{artist_name}</p>
      <AudioItem audioRef={audioRef} />
      <LikeButton likes={likes} />
    </div>
  );
};

export default SongPlayer;
