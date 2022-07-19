import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { AudioInterface } from "../types/Globals";

export const AudioItem = ({ audioRef }: AudioInterface) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  console.log(audioRef);
  return (
    <Box
      onClick={() => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
      }}
    >
      {isPlaying ? (
        <BsFillPauseCircleFill fontSize={"90px"} />
      ) : (
        <BsFillPlayCircleFill fontSize={"90px"} />
      )}
      <Button
        onClick={() => {
          audioRef.current.currentTime = 0;
        }}
      >
        Click
      </Button>
    </Box>
  );
};
