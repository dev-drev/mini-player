import React, { useRef, useState } from "react";
import { Song } from "../types/Globals";

import "../App.css";
import { AudioItem } from "./AudioButton";
import LikeButton from "./LikeButton";
import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import TrackProgress from "./TrackProgress";
import ModalApp from "./Modal";
import { ModalProps } from "../types/Globals";
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
      bg="linear-gradient(to right, #ffffff18 0%, #ffffff14 100%)"
      w="full"
      boxShadow={"xl"}
      p="20px"
    >
      <Image
        rounded="md"
        boxSize="80px"
        objectFit="cover"
        src={cover_image_path}
        alt="Image"
        className="artwork"
      />
      <ModalApp cover_image_path={cover_image_path ? cover_image_path : ""} />

      <Flex
        w={"full"}
        alignItems={"start"}
        justifyContent={"space-between"}
        pl="25px"
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
