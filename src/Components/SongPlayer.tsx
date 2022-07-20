import React, { useRef } from "react";
import { Song } from "../types/Globals";
import { AudioItem } from "./Buttons/AudioButton";
import LikeButton from "./Buttons/LikeButton";
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import TrackProgress from "./Progress/TrackProgress";
import ModalApp from "./Modal/Modal";

import "../App.css";

const SongPlayer = ({
  id,
  name,
  plays,
  likes,
  artist_name,
  song_release,
  music_file_path,
  cover_image_path,
}: Song) => {
  const audioRef = useRef(new Audio(music_file_path));

  return (
    <Flex
      borderRadius={10}
      bg="linear-gradient(to right, #ffffff18 0%, #ffffff14 100%)"
      w="full"
      boxShadow={"xl"}
      p="20px"
    >
      <ModalApp
        id={id}
        name={name}
        plays={plays}
        likes={likes}
        artist_name={artist_name}
        song_release={song_release}
        cover_image_path={cover_image_path ? cover_image_path : ""}
      />

      <Flex
        w={"full"}
        alignItems={"start"}
        justifyContent={"space-between"}
        pl="20px"
        flexDirection={"column"}
      >
        <Box color="#e5e5e5">
          <Heading fontSize={"18px"}>{name}</Heading>
          <Text fontSize={"15px"} textAlign={"left"}>
            {artist_name}
          </Text>
        </Box>

        <HStack w="90%" spacing={5}>
          <TrackProgress audioRef={audioRef} />
          <LikeButton id={id} />
        </HStack>
      </Flex>

      <Box
        w="120px"
        alignItems={"center"}
        display="flex"
        justifyContent={"center"}
      >
        <AudioItem audioRef={audioRef} />
      </Box>
    </Flex>
  );
};

export default SongPlayer;
