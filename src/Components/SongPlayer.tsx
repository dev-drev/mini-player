import React, { useRef, useState } from "react";
import { Song } from "../types/Globals";

import "../App.css";
import { AudioItem } from "./AudioButton";
import LikeButton from "./LikeButton";
import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
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
    <Flex
      borderRadius={10}
      bg="linear-gradient(to right, #ffffff26 0%, #ffffff33 100%)"
      w="full"
      boxShadow={"xl"}
      p="20px"
    >
      <Image
        rounded="lg"
        boxSize="90px"
        objectFit="cover"
        src={cover_image_path}
        alt="Image"
        className="artwork"
      />
      <Flex
        w={"full"}
        alignItems={"start"}
        justifyContent={"space-between"}
        pl="25px"
        flexDirection={"column"}
      >
        <Box color="#ccc">
          <Heading fontSize={"18px"}>{name}</Heading>
          <Text textAlign={"left"}>{artist_name}</Text>
        </Box>

        <HStack w="90%" spacing={3}>
          <TrackProgress audioRef={audioRef} />
          <LikeButton id={id} />
        </HStack>
      </Flex>

      <Box w="120px">
        <AudioItem audioRef={audioRef} />
      </Box>
    </Flex>
  );
};

export default SongPlayer;
