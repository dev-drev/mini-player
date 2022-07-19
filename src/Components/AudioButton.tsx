import { Box, Button, Fade } from "@chakra-ui/react";
import React from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { AudioInterface } from "../types/Globals";

export const AudioItem = ({ audioRef }: AudioInterface) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  console.log(audioRef);
  return (
    <Box
      color="#27ffccf5"
      display={"flex"}
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
        <Box>
          {" "}
          <BsFillPauseCircleFill fontSize={"90px"} />
        </Box>
      ) : (
        <Box>
          {" "}
          <BsFillPlayCircleFill fontSize={"90px"} />
        </Box>
      )}
    </Box>
  );
};
