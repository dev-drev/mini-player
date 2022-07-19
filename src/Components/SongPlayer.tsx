import React, { useRef, useState } from "react";
import { Song } from "../types/Globals";

import "../App.css";
import { AudioItem } from "./AudioButton";
import LikeButton from "./LikeButton";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import TrackProgress from "./TrackProgress";

const SongPlayer = ({
  id,
  name,
  artist_name,
  music_file_path,
  cover_image_path,
}: Song) => {
  const audioRef = useRef(new Audio(music_file_path));

  return (
    <Flex bg="whiteAlpha.200" w="full" boxShadow={"xl"} p="20px">
      <Image
        rounded="lg"
        boxSize="90px"
        objectFit="cover"
        src={cover_image_path}
        alt="Image"
        className="artwork"
      />
      <Box
        w={"full"}
        display="flex"
        alignItems={"start"}
        pl="25px"
        flexDirection={"column"}
      >
        <Heading fontSize={"18px"} color="#000000">
          {name}
        </Heading>
        <Text>{artist_name}</Text>
      </Box>
      <Progress value={98} />
      <TrackProgress audioRef={audioRef} />

      <HStack w="120px">
        <AudioItem audioRef={audioRef} />
        <LikeButton id={id} />
      </HStack>
    </Flex>
  );
};

export default SongPlayer;
