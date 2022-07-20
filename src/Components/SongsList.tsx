import React, { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
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
    <VStack
      spacing={"20px"}
      w="100vw"
      p={["8px", "35px", "30px", "160px"]}
      flexDirection={"column"}
      justifyContent="center"
    >
      {songs.map((item, idx) => {
        console.log(item.id);
        return (
          <SongPlayer
            key={idx}
            id={item.id}
            plays={item.plays}
            likes={item.likes ? item.likes : 0}
            name={item.name}
            song_release={item.song_release}
            artist_name={item.artist_name}
            music_file_path={item.music_file_path}
            cover_image_path={item.cover_image_path}
          />
        );
      })}
    </VStack>
  );
};

export default SongsList;
